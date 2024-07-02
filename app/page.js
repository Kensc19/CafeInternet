"use client"; 
import { useState } from "react";
import Navbar from "./navbar"; 
import styles from "./Home.module.css";

export default function Home() {
  const [section, setSection] = useState("servidor");

  return (
    <div className={styles.container}>
      <Navbar setSection={setSection} />
      <h1 className={styles.title}>Bitácora Proyecto de Redes</h1>
      <h1 className={styles.title}>Café Internet</h1>

      {section === "participantes" && (
        <>
          <h2 className={styles.subtitle}>Participantes:</h2>
          <ul className={styles.participants}>
            <li>Aarón Chacón Céspedes - C22027</li>
            <li>Gabriel Chaves Rojas - C22202</li>
            <li>Jesús Fuentes Condega - C12973</li>
            <li>Kendall Sánchez Chinchilla - C27227</li>
            <li>Blanca Segura Campos - C27403</li>
          </ul>
        </>
      )}

      {section === "direcciones" && (
        <>
          <h2 className={styles.subtitle}>Direcciones IP por Organización:</h2>
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
        </>
      )}

      {section === "conexiones" && (
        <>
          <h2 className={styles.subtitle}>Conexiones:</h2>
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
        </>
      )}

      {section === "switch" && (
        <>
          <h2 className={styles.subtitle}>Configuración del Switch Central:</h2>
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
                <td>Asignar un nombre a la VLAN facilita su identificación y organización en la red.</td>
              </tr>
              <tr>
                <td>Revisar las interfaces</td>
                <td>show ip interface brief</td>
                <td>Se ejecuta el comando para ver las interfaces disponibles, estas mismas serán las que se configuren en la vlan.</td>
              </tr>
              <tr>
                <td>Habilitamos la configuración</td>
                <td>configure terminal</td>
                <td>El comando configure terminal habilita el modo de configuración global en el dispositivo de red.</td>
              </tr>
              <tr>
                <td>Configurar un rango de interfaces</td>
                <td>interface range g1/0/1-24</td>
                <td>El comando interface range g1/0/1-24 permite configurar múltiples interfaces de manera simultánea, facilitando y agilizando la administración de la red al aplicar los mismos ajustes a todas las interfaces especificadas en el rango.</td>
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
        </>
      )}

      {section === "router" && (
        <>
          <h2 className={styles.subtitle}>Configuración Router de Café Internet:</h2>
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
              <tr>
                <td>Configuración del DHCP en el router</td>
                <td>
                  ip dhcp pool LAN_CI<br/>
                  next-server 172.16.20.100<br/>
                  option 67 ascii pxelinux.0<br/>
                  sudo systemctl restart tftpd-hpa<br/>
                  sudo systemctl restart nfs-kernel-server
                </td>
                <td>
                  Se agrega la option 67 y el next server al DHCP.<br/>
                  Se reinician los servicios y se prueban.
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {section === "servidor" && (
        <>
          <h2 className={styles.subtitle}>Configuración del Servidor:</h2>
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
                <td>Instalación del Ubuntu server</td>
                <td>
                  <a href='https://ubuntu.com/download/server'>https://ubuntu.com/download/server</a>
                </td>
                <td>
                  Se descarga la imagen de instalación de la página oficial<br/>
                  y se instala en una máquina física o en un ambiente de<br/>
                  maquinas virtuales como VirtualBox o VMWare.
                </td>
              </tr>
              <tr>
                <td>Instalación de los servicios</td>
                <td>sudo apt-get install tftpd-hpa syslinux-common nfs-kernel-server</td>
                <td>Se instalan los servicios necesarios para el correcto funcionamiento del servidor PXE.</td>
              </tr>
              <tr>
                <td>Instalación del servicio TFTP</td>
                <td>
                  sudo nano /etc/default/tftpd-hpa<br/>
                  sudo systemctl restart tftpd-hpa
                </td>
                <td>
                  Se revisa el archivo para que tenga este formato:<br/>
                  TFTP_USERNAME="tftp"<br/>
                  TFTP_DIRECTORY="/srv/tftp"<br/>
                  TFTP_ADDRESS="0.0.0.0:69"<br/>
                  TFTP_OPTIONS="--secure"<br/>
                  Se crea el directorio TFTP y se reinicia el servidor<br/>
                  sudo mkdir -p /srv/tftp<br/>
                  sudo systemctl restart tftpd-hpa
                </td>
              </tr>
              <tr>
                <td>Editar el archivo /etc/exports</td>
                <td>
                  sudo nano /etc/exports<br/>
                  /mnt/mint-root *(rw,sync,no_subtree_check,no_root_squash)
                </td>
                <td>Se añade esta línea para configurar la exportación del sistema de archivos NFS.</td>
              </tr>
              <tr>
                <td>Montar la partición de Linux Mint</td>
                <td>
                  sudo mount /dev/sdb2 /mnt/mint-root
                </td>
                <td>Esto se hace para que las máquinas puedan bootear.</td>
              </tr>
              <tr>
                <td>Exportar la configuración NFS</td>
                <td>
                  sudo exportfs -a<br/>
                  sudo systemctl restart nfs-kernel-server
                </td>
                <td>Se utilizan para exportar las configuraciones de NFS y reiniciar el servidor NFS. Esto asegura que cualquier cambio en las configuraciones de NFS se aplique correctamente y que el servidor esté funcionando adecuadamente para compartir archivos en la red.</td>
              </tr>
              <tr>
                <td>Preparar los archivos de arranque</td>
                <td>
                  sudo cp /mnt/mint-root/boot/vmlinuz-* /srv/tftp/vmlinuz<br/>
                  sudo cp /mnt/mint-root/boot/initrd.img-* /srv/tftp/initrd.img<br/>
                  sudo chmod 755 /srv/tftp/vmlinuz<br/>
                  sudo chmod 755 /srv/tftp/initrd.img<br/>
                  sudo chown -R nobody:nogroup /srv/tftp
                </td>
                <td>Se utilizan para copiar los archivos del kernel y del initramfs desde el sistema de archivos montado a la ubicación del servidor TFTP. Esto es necesario para preparar el servidor TFTP para el arranque en red, asegurando que los archivos críticos del sistema estén disponibles para los clientes que lo requieran. Otorgan permisos de lectura y ejecución para todos los usuarios y permisos de escritura para el propietario de los archivos del kernel y del initramfs. El comando sudo chown -R nobody:nogroup /srv/tftp cambia el propietario y el grupo de todos los archivos en el directorio TFTP a nobody y nogroup, respectivamente. Esto es necesario para asegurar que los archivos sean accesibles y seguros para el servidor TFTP y sus clientes, evitando problemas de permisos y mejorando la seguridad.</td>
              </tr>
              <tr>
                <td>Configurar PXE</td>
                <td>
                  sudo apt-get install syslinux-common<br/>
                  wget http://ftp.debian.org/debian/dists/stable/main/installer-amd64/current/images/netboot/netboot.tar.gz<br/>
                  sudo tar -xzf netboot.tar.gz -C /srv/tftp
                </td>
                <td>Copia el archivo pxelinux.0 al directorio del servidor TFTP. Esto es esencial para configurar PXELINUX, un componente crucial para el arranque en red (PXE).</td>
              </tr>
              <tr>
                <td>Crear el directorio de configuraciones</td>
                <td>
                  sudo nano /srv/tftp/pxelinux.cfg/default
                </td>
                <td>Se agrega el siguiente contenido:<br/>
                  DEFAULT linux<br/>
                  LABEL linux<br/>
                  KERNEL vmlinuz<br/>
                  APPEND initrd=initrd.img root=/dev/nfs nfsroot=&lt;IP-servidor&gt;:/mnt/mint-root rw ip=dhcp
                </td>
              </tr>
              <tr>
                <td>Asignar una IP estática al servidor</td>
                <td>
                  sudo nano /etc/netplan/01-netcfg.yaml
                </td>
                <td>
                  Se utiliza para crear o editar el archivo de configuración de Netplan, donde se asigna una IP estática al servidor. Se agregan los datos al archivo:<br/>
                  network:<br/>
                  version: 2<br/>
                  renderer: networkd<br/>
                  ethernets:<br/>
                  enp0s3:<br/>
                  dhcp4: no<br/>
                  addresses:<br/>
                  - 192.168.1.10/24<br/>
                  gateway4: 192.168.1.1<br/>
                  nameservers:<br/>
                  addresses:<br/>
                  - 8.8.8.8<br/>
                  - 8.8.4.4<br/>
                  Esto asegura que el servidor siempre utilice la dirección IP 192.168.1.10, para la IP estática del servidor.
                </td>
              </tr>
              <tr>
                <td>Aplicar la configuración</td>
                <td>sudo netplan apply</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {section === "esquema" && (
        <>
          <h2 className={styles.subtitle}>Esquema de red:</h2>
          <h2 className={styles.subtitle} style={{ fontWeight: "normal" }}>Mini Internet</h2>
          <img src="esquema.PNG" alt="Descripción de la imagen" className={styles.image} />
        </>
      )}
    </div>
  );
}