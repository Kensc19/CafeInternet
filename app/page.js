import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bitácora Proyecto de Redes - Café Internet</h1>

      <h2 className={styles.subtitle}>Participantes</h2>
      <ul className={styles.participants}>
        <li>Aarón Chacón Céspedes-C22037</li>
        <li>Gabriel Chaves Rojas-C22202</li>
        <li>Jesús Fuentes Condega-C12973</li>
        <li>Kendall Sánchez Chinchilla-C27227</li>
        <li>Blanca Segura Campos-C27403</li>
      </ul>

      <h2 className={styles.subtitle}>Direcciones IP por Organización</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Organización</th>
            <th>Router</th>
            <th>Switch</th>
            <th>Cliente</th>
            <th>BGP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Café Internet</td>
            <td>10.0.0.1</td>
            <td>172.16.20.1</td>
            <td>172.16.20.3</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Call Center</td>
            <td>10.0.0.2</td>
            <td>172.16.16.1</td>
            <td>172.16.16.3</td>
            <td>300</td>
          </tr>
          <tr>
            <td>File Sharing</td>
            <td>10.0.0.4</td>
            <td>172.16.19.1</td>
            <td>172.16.19.3</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Bases de Datos</td>
            <td>10.0.0.3</td>
            <td>172.16.18.1</td>
            <td>172.16.18.3</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Monitoreo</td>
            <td>10.0.0.6</td>
            <td>172.16.17.1</td>
            <td>172.16.17.3</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Dominio</td>
            <td>10.0.0.5</td>
            <td>172.16.21.1</td>
            <td>172.16.21.3</td>
            <td>600</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Conexiones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Dispositivo</th>
            <th>Puerto</th>
            <th>Conexión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Router</td>
            <td>GigabitEthernet0/1</td>
            <td>Switch VLAN</td>
          </tr>
          <tr>
            <td>Router</td>
            <td>GigabitEthernet0/0</td>
            <td>Switch Café Internet</td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>GigabitEthernet1/0/2</td>
            <td>Router Café Internet</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Configuración del Switch Central</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Configuración realizada</th>
            <th>Comandos</th>
            <th>¿Por qué?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Creación de la VLAN</td>
            <td>vlan 10</td>
            <td>Se realizó una vlan para conectar a las distintas organizaciones, esto debido a la falta de equipo en cuanto a cableado.</td>
          </tr>
          <tr>
            <td>Asignación de nombre a la vlan</td>
            <td>name VLAN_Routers</td>
            <td></td>
          </tr>
          <tr>
            <td>Revisar las interfaces</td>
            <td>show ip interface brief</td>
            <td>Se ejecuta el comando para ver las interfaces disponibles, estas mismas serán las que se configuren en la vlan.</td>
          </tr>
          <tr>
            <td>Habilitamos la configuración</td>
            <td>configure terminal</td>
            <td></td>
          </tr>
          <tr>
            <td>Configurar un rango de interfaces</td>
            <td>interface range g1/0/1-24</td>
            <td></td>
          </tr>
          <tr>
            <td>Configurar una interfaz de switch en modo acceso</td>
            <td>switchport mode access</td>
            <td>El puerto solo enviará y recibirá tramas no etiquetadas que pertenecen a la VLAN específica a la que ha sido asignado.</td>
          </tr>
          <tr>
            <td>Asignar una interfaz de switch a la VLAN</td>
            <td>switchport access vlan 10</td>
            <td>Este paso se realiza cuando la interfaz está configurada en modo de acceso.</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Configuración Router de Café Internet</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Configuración</th>
            <th>Comando</th>
            <th>¿Por qué?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Configuración de la IP del router</td>
            <td>
              interface GigabitEthernet0/0<br/>
              ip address 10.0.0.1 255.255.255.0<br/>
              no shutdown<br/>
              interface GigabitEthernet0/1<br/>
              no shutdown<br/>
              ip address 172.16.20.1 255.255.255.0
            </td>
            <td>
              Entra a la interfaz GigabitEthernet0/0<br/>
              Configura la IP del puerto GigabitEthernet0/0<br/>
              Para encender el puerto GigabitEthernet0/0<br/>
              Entra a la interfaz GigabitEthernet0/1<br/>
              Para encender el puerto GigabitEthernet0/1<br/>
              Configura la IP del puerto GigabitEthernet0/1
            </td>
          </tr>
          <tr>
            <td>Configuración de BGP</td>
            <td>
              router bgp 400<br/>
              neighbor 10.0.0.2 remote as 300<br/>
              neighbor 10.0.0.3 remote-as 500<br/>
              neighbor 10.0.0.4 remote-as 200<br/>
              neighbor 10.0.0.5 remote-as 600<br/>
              neighbor 10.0.0.6 remote-as 100<br/>
              network 10.0.0.0 mask 255.255.255.0<br/>
              network 172.16.20.0 mask 255.255.255.0
            </td>
            <td>
              Entra en el modo de configuración del BGP para el sistema autónomo 400.<br/>
              Estos vecinos son otros routers BGP con los que se intercambiará información de enrutamiento.<br/>
              La configuración de vecinos es esencial para que BGP pueda funcionar correctamente y propagar rutas entre sistemas autónomos.<br/>
              Anuncia la red 10.0.0.0/24 en BGP.<br/>
              Anuncia la red 172.16.20.0/24 en BGP.
            </td>
          </tr>
          <tr>
            <td>Crear un nuevo DHCP pool</td>
            <td>
              ip dhcp pool LAN_CI<br/>
              network 172.16.20.0 255.255.255.0<br/>
              default-router 172.16.20.1<br/>
              ip dhcp excluded-address 172.16.20.1
            </td>
            <td>
              Crea y Configura un pool de direcciones DHCP.<br/>
              Este pool de direcciones DHCP se utiliza para asignar automáticamente direcciones IP.<br/>
              Configuración del gateway.<br/>
              Se excluyen para evitar colisiones, en este caso son el gateway.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Configuración del Servidor</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Configuración</th>
            <th>Comando</th>
            <th>¿Por qué?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instalación del servidor TFTP</td>
            <td>
              sudo apt install tftpd-hpa<br/>
              sudo nano /etc/default/tftpd-hpa<br/>
              TFTP_USERNAME="tftp"<br/>
              TFTP_DIRECTORY="/var/lib/tftpboot"<br/>
              TFTP_ADDRESS="0.0.0.0:69"<br/>
              TFTP_OPTIONS="--secure"<br/>
              sudo mkdir -p /var/lib/tftpboot<br/>
              sudo chown -R tftp:tftp /var/lib/tftpboot<br/>
              sudo chmod -R 777 /var/lib/tftpboot
            </td>
            <td>
              Se edita el archivo de configuración.<br/>
              Se agrega la siguiente información al archivo.<br/>
              Crear el directorio TFTP y establecer permisos.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}