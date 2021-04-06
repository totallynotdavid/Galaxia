Índice

# Administración

## Almacenamiento en la nube

Nombre|Funciones|Servidores disponibles|Sistemas operativos
------|---------|----------------------|-------------------
[rclone](https://rclone.org/)|<ul> <li>Sincroniza archivos y directorios entre distintos servidores usando líneas de comando.</li> <li>Comprobación MD5/SHA1.</li> <li>Solo copia de nuevos archivos.</li> <li>Varias descargas consecutivas.</li> <li>Encripción.</li> </ul>| <ul> <li>Box</li> <li>Dropbox</li> <li>FTP</li> <li>Google Drive</li> <li>Google Photos</li> <li>HTTP</li> <li>Hubic</li> <li>Mega</li> <li>Microsoft OneDrive</li> <li>SFTP</li> <li>WebDAV</li> <li>The local filesystem</li> <li>Entre otros...</li> </ul> | <ul> <li>Windows</li> <li>macOS</li> <li>Linux</li> <li>.deb</li> <li>.rpm</li> <li>FreeBSD</li> <li>NetBSD</li> <li>OpenBSD</li> <li>Plan9</li> <li>Solaris</li> </ul>
[Almacenamiento ilimitado en Google Drive](https://github.com/stewartmcgown/uds)|<ul> <li>Almacena ilimitadamente en Google Drive a través de Google Docs.</li> <li>Descarga cualquier archivo almacenado.</li> <li>Separa archivos binarios en Google Docs con texto codificado base64.</li> <li>El tamaño del archivo final es más grande que el original 4:3.</li> </ul>| <ul> <li>Google Drive</li> <ul> | <ul> <li>Aplicación web (Universal)</li> <ul>

## Automatización
### Red entre pares y Usenet
Nombre|Funciones|Código abierto|Sistemas operativos
------|---------|--------------|-------------------
[NZBHydra](https://github.com/theotherp/nzbhydra2/) `Metabuscador`|Metabuscador|`Desconocido`| <ul> <li>Windows</li> <li>Linux</li></ul>
[Sonarr](https://sonarr.tv/)| <ul> <li>Descarga películas y series en versiones específicas cuando se encuentren disponibles.</li> <li>Descarga automáticamente una nueva versión cuando esté disponible.</li> <li>Monitoreo de varios canales RSS.</li> <li>Calendario de estrenos.</li> </ul>|`Sí` ([Código en Github](https://github.com/Sonarr/Sonarr))| <ul> <li>Linux</li> <li>Windows</li> <li>macOS</li> </ul>
[Radarr](https://www.radarr.video/)|<ul> <li>Descarga películas y series en versiones específicas cuando se encuentre disponibles.<li>Descarga automáticamente una nueva versión cuando esté disponible. <li>Calendario de estrenos.<li>Integración con software P2P. <li>Renombrado de archivos automático.</ul>| `Sí` ([Código bifurcado de Sonarr en Github](https://github.com/Radarr/Radarr)) | <ul> <li>Linux <li>Windows <li>macOS </ul>
[SiCKRAGE](https://sickrage.ca/): Administrador automático de videoteca de series de televisión. | <ul> <li>Proveedor de torrents: <br>1. SceneAccess <br>2. TorrentDay <br>3. Rarbg <br>4. Entre otros <li>Proveedor de .nbz: <br>1. Bin Search <br>2. NZBs <br>3. Usenet-Crawler <br>4. NZBDog <br>5. Entre otros <li>Descarga automática de subtítulos usando los siguientes servidores: <br>1. Addic7ed <br>2. OpenSubtitles <br>3. Popnapisi <br>4. TVSubtiles <br>5. Entre otros <li>Integrado con AniDB. <li>Calendario de estrenos.</ul> | `Desconocido` | <ul> <li>Windows <li>Linux <li>OSX <li>Synology <li>Entre otros.</ul>
[nefarious](https://lardbit.github.io/nefarious/): Pretende combinar "[Sonarr](https://sonarr.tv/)", "[Radarr](https://www.radarr.video/)" y [Ombi](https://github.com/tidusjar/Ombi). | <ul> <li>Descarga películas y series en versiones específicas cuando se encuentre disponibles. <li>Descarga automáticamente una nueva versión cuando esté disponible. <li>Descubre nuevas películas y series de televisión (por popularidad, géneros, año, etc). <li>Evitar automáticamente la descarga de ciertos torrent. <li>Renombrado automático. <li>Múltiples lenguajes disponibles gracias a "[The Movie Database (TMDb)](https://www.themoviedb.org/)". </ul> | `Sí` ([Código abierto en Github](https://github.com/lardbit/nefarious)). | <ul> <li>Linux <li>Windows <li>macOS </ul>
[Bazarr](https://www.bazarr.media/): Complemento para "[Sonarr](https://sonarr.tv/)" y "[Radarr](https://www.radarr.video/)". | <ul> <li>Descarga subtítulos deseados tan pronto estén disponibles y actualiza en caso haya alguno nuevo disponible. <li>Búsqueda manual. </ul> | `Sí` ([Código abierto en Github](https://github.com/morpheus65535/bazarr)) | <ul> <li>Linux <li>Windows <li>macOS </ul>
[Bonarr](https://github.com/klassicstudios/Bonarr): Bifurcado de "[Radarr](https://www.radarr.video/)". | <ul> <li>Descarga películas pornográficas en versiones específicas cuando se encuentren disponibles. <li>Integración con SABnzbd y NZBGet. <li>Búsqueda manual. </ul> | `Sí` ([Código abierto en Github](https://github.com/klassicstudios/Bonarr)) | <ul> <li>Windows <li>Linux <li>macOS <li>Raspberry Pi <li>Entre otros 
[Lidarr](https://lidarr.audio/): Bifucado de "[Sonarr](https://sonarr.tv/). | <ul> <li>Calendario de estrenos. <li> Búsqueda de manual. | `Sí` ([Código abierto en Github](https://github.com/Lidarr/Lidarr)) | <ul> <li>Linux <li>Windows <li>macOS </ul>
[Mylar](https://github.com/evilhero/mylar) | <ul> <li>Descarga automáticamente cómics en formato .cbr o .cbz de `.nzb` y `.torrent`. <li>Funciona con SABnzbd, NZBGET y soporte para varios clientes torrent. <li>Calendario de estrenos de usuarios específicos o arcos narrativo. | `Sí` ([Código abierto en Github](https://github.com/evilhero/mylar)) ¡Review the [fork](https://github.com/mylar3/mylar3)! <br>Está compilado en Python. | Estado: Alfa en 2019, no estable.

## Contraseñas

|Nombre|Funciones|Código Abierto|Sistemas operativos|
------|---------|--------------|-------------------|
[Bitwarden](https://bitwarden.com/)| <ul> <li>Gestor de contraseñas y notas. <li>Generador de contraseñas </ul>|`Sí`, en [Github](https://github.com/bitwarden) | <ul> <li>Extensiones para navegadores (Chrome, Firefox, Safari, Vivaldi, Opera, Brave, Edge, Tor) <li>Aplicación web<li>Windows <li>macOS <li>Linux </ul>

## Organización

|Nombre|Funciones|Formatos|Código Abierto|Sistemas operativos|
|------|---------|--------|--------------|-------------------|
[Filebot](https://www.filebot.net/) `De pago`| <ul> <li> Organizar y renombrar películas y series de televisión.<ul> <li>Información de [TheTVDB](https://thetvdb.com), [AniDB](https://anidb.net) o [TVmaze](http://www.tvmaze.com). <li>Revertir al nombre original usando historial interno o el nombre del torrent original.</ul> <li>Descargar y pegar subtítulos, previsualzación y solución de problemas al encodificar. <ul><li>OpenSubtitles. <li>Subir subtítulos junto al hash del video.</ul> <li> Descargar diseño ilustración o fotografía de una publicación. <li> Automatización disponible.</ul>| Archivos multimedia, no está listado (¡Pendiente!). |No, solo posee una versión de pago.| Windows </br> macOs </br> Linux
[Picard](https://picard.musicbrainz.org/)| <ul> <li>Organizar música incluso sin metadatos. <ul><li>A través de huella digital de audio (AcousticID).</ul> <li>Insertar metadatos. <li>Complementos disponibles.</ul>|`.mp3` </br> `flac` </br> `.ogg` </br> `.m4a` </br> `.wma` </br> `.wav` </br> Entre otros. |`Sí`, disponible en [Github](https://github.com/musicbrainz/picard)<ul><li>Escrito en Python.</ul>| Windows </br> macOS </br> Linux
[FFsubsync](https://github.com/smacke/ffsubsync)|<ul><li>Reordenar la sincronización de subtítulos. <li>Interfaz de líneas de comandos.<ul><li>Escrito en lenguaje Python.</ul> <li>REQUERIDO:<ul><li>FFmpeg <li>Python</ul></ul>|`.srt`|`Sí`, disponible en [Github](https://github.com/smacke/ffsubsync)|Windows </br> macOS </br> Linux

## Red
### Control
|Nombre|Funciones|Sistemas operativos|
|------|---------|-------------------|
[NetLimiter](https://netlimiter.com/)|<ul><li>Control de tráfico de internet. <li>Herramienta de monitoreo de internet. <li>Bloquear conexión a ciertas aplicaciones. <li>Establecer cuotas límite para distintas aplicaciones.| Windows

### Descarga de archivos
|Nombre|Funciones|Código Abierto|Sistemas operativos|
|------|---------|--------------|-------------------|
[qBittorrent](https://www.qbittorrent.org)|<ul><li>Cliente P2P. <li>Motor de búsqueda.</ul>|`Sí`, disponible en [Github](https://github.com/qbittorrent/qBittorrent) <ul><li>Escrito en C++.</ul>| Windows </br> macOS </br> Linux </br> Unix
[uGet](https://ugetdm.com/)|<ul><li>Descarga multiconexión. <li>Monitoreo del portapapeles. <li>Descarga y unión del mismo archivo de varios servidores.|`Sí`, disponible en [SourceForge](https://sourceforge.net/p/urlget/uget2/ci/master/tree/)| Linux </br> Windows </br> BSD </br> Android

# Multimedia

## Escritura

### Cuaderno de notas

|Nombre|Características|Código Abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[Roam Research](https://roamresearch.com/) `De pago` `Gratuito`|Simple y práctico. </br>Sincronización de notas. </br>Posee diversos atajos de teclado.|No.|Aplicación web,
[Manifest](https://www.manifest.app/)|Simple y práctico. </br>Anónimo y "seguro" (se almacena en el navegador de forma local). </br>Modo oscuro disponible.|`Sí`, disponible en [Github](https://github.com/jonathontoon/manifest/)
[Microtetha](https://notepad.microtheta.com/)

### Publicación

*Plataformas*:
|Nombre|Características|Sistemas operativos|Adicional|
|------|---------------|-------------------|---------|
[write.as](https://write.as/)|Simple y práctico. </br> Publica en varios sitios a la vez: <ul><li>Tumblr <li>ghost <li>Mastodon <li>Pleroma</ul>|Aplicación web|Disponible en [Write Freely](https://writefreely.org/) como herramienta para instalar en un servidor.

*Asistentes para escribir: TRADUCCIÓN*
|Nombre|Características|Sistemas operativos|Adicional|
|------|---------------|-------------------|---------|
[Deepl](https://www.deepl.com/es/translator) `De pago` `Gratuito`|Lenguajes disponibles incluyen: <ul><li>**Inglés** <li>Español <li>**Alemán** <li>Chino <li>Francés;<li>Portugués <li>Italiano <li>Polaco <li>Ruso <li>Neerlandés</ul> La versión gratuita tiene un límite de palabras (5000). </br> Traducción de documentos disponible.| Aplicación nativa para: <ul><li>Windows <li>macOS </ul>|/No/
Papago ¡PENDIENTE!

*Asistentes para escribir: VARIOS*
|Nombre|Características|Sistemas operativos|
|------|---------------|-------------------|
[ASCIIFlow](asciiflow.com)|Crea tablas o cualquier cosa que puedas imaginar al estilo ASCII.|Aplicación web

## Imágenes (PENDIENTE)

### Búsqueda inversa de imágenes:

|Nombre|Características|Sitios compatibles|
|------|---------------|------------------|
[Image Operations](https://imgops.com/)|Pega o sube una imagen o pega el enlace de una imagen: <ul><li>También puedes insertar `imgops.com/[]` para automatizar la búsqueda.</ul> Edición básica de imágenes: <ul><li>Plataforma nativa <li>Pixlr <li>Picmonkey <li>Luna Pic <li>Szoter </ul> |<ul><li>Imágenes de Google <li>Bing Images <li>Tinyeye <li>Karmadecay (Reddit) <li>Yandex <li>Baidú <li>So (REVISAR) <li>Sogou </ul> 
[`EN`] [iqdb](https://iqdb.org)|Búsqueda de imágenes relacionadas a series y películas de animación japonesas, incluyendo historietas japonesas (de adultos también).|PENDIENTE
[`EN`] [Saucenao](https://saucenao.com/)
[`JP`] [ASCCI2D](https://www.ascii2d.net)
[`EN`] [trace.moe](https://trace.moe/)

### Metadatos

|Nombre|Información disponible|
|------|----------------------|
[Regex Info](http://exif.regex.info/)|EXIF/XMP/GPS <ul><li>Miniaturas ocultas. <li>Datos sobre la ubicación. <li>Modelo de la cámara. <li>Fecha <li>Entre otros.</ul>
[Meta Pics](http://metapicz.com/)|Miniaturas ocultas </br> Datos sobre la ubicación. </br>Modelo de la cámara. </br>Fecha. <br>Entre otros.
[Page Headers](https://pageheaders.com/)|Edad del archivo (imagen). </br> Tipo de archivo. </br> Tipo de hospedaje.
[Rex Swain's HTTP Viewer](http://www.rexswain.com/)|Edad del archivo (imagen). </br> Tipo de archivo. </br> Tipo de hospedaje.

### Resolución de imágenes

|Nombre|Características|Código abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[Dynamic Drive](https://tools.dynamicdrive.com)|Muestra de varias versiones amplificadas de la imagen.|`No`|Aplicación web
[Waifu2x](http://waifu2x.udp.jp/)|Mejora de la resolución de imágenes usando redes neuronales convolucionales. </br> Funciona mejor en imágenes de anime.|`Sí`, disponible en [Github](https://github.com/nagadomi/waifu2x).|Aplicación web

*Versiones bifurcadas de Waifu2x*
|Nombre|Características|Código abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[`JP`] ,[`+`]  [waifu-2x-cafee](https://github.com/lltcggie/waifu2x-caffe) GUI|**Requerido: GPU Nvidia**.</br>Disponible en varios idiomas: <ul><li>Inglés <li>Japonés <li>Chino simplificado <li> Chino tradicional <li>Coreano <li>Turco <li>Español <li>Francés</ul>|`Sí`, disponible en [Github](https://github.com/lltcggie/waifu2x-caffe)|Windows Vista o superior.
[`EN`] [waifu2x ncnn vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan)|El autor recomienda usar GPU de marca Intel, AMD o Nvidia.
[`EN`] [waifu 2x, solo conversión](https://github.com/DeadSix27/waifu2x-converter-cpp), [`EN`] [GUI](https://github.com/YukihoAA/waifu2x_snowshell), ¡diferentes autores!

### Búsqueda de tipografía

|Nombre|Características|Sistemas operativos|
|------|---------------|-------------------|
[What the Font](https://www.myfonts.com/WhatTheFont/)|d|d
[What font is](https://www.whatfontis.com/)|d|d

## Videos
|Nombre|Características|Código abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[FFmpeg](https://ffmpeg.org/)|Grabar, convertir y reproducir audio y video; entre otros.|`Sí`, disponible en [ffmpeg.org](https://git.ffmpeg.org/ffmpeg.git).|Windows </br> macOS </br> Linux
[HandBrake](https://handbrake.fr/)|Convierte videos de cualquier formato a casi cualquier formato. </br>Opciones preconfiguradas. </br> Formatos disponibles: <ul><li>Contenedor de archivos: `.mp4` (`.m4v`) y `.mkv`. <li>Codificador de video: H.265 (x265 y QuickSync), H.264 (x264 y QuickSync), H.265 MPEG-4 y MPEG-2, VP8, VP9 y Theor. <li>Codificador de audio: `.aac` / `.he-aac`, `.mp3`, `.flac`, `.ac3` o Vorbi. <li>Adaptador de audio: `.ac-3`, `.e-ac3`, `.dts`, `.dts-hd`, TrueHD, `.aac` y pistas `.mp3`.</ul> Subtítulos (VobSub, Closed Captions CEA-608, SSA, `.srt`). </br> Calidad constante o tasa de bits promedio del codificador del video. </br> Soporte para VFR y CFR. </br> Previsualización.|`Sí`, disponible en [Github](https://github.com/HandBrake/HandBrake)|Windows </br> macOS </br> Linux

## Videojuegos

|Nombre|Características|Código abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[Goldberg Steam Simulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator)|Emulador de las funciones en línea de Steam en LAN.|`Sí`, disponible en [Gitlab](https://gitlab.com/Mr_Goldberg/goldberg_emulator).|Windows </br> macOS </br> Linux
[Cream API](https://cs.rin.ru/forum/viewtopic.php?t=70576)|<ul><li>Desbloquear episodios descargable en Steam. <li>Funciona con todas las versiones conocidas de SteamApps (2 al 8). <li>Funciona con todas las versiones conocidas de SteamUser (9 al 20). <li>Funciona con videojuegos que hacen uso de steamclient(64).dll.

# Descarga

## Aplicación nativa

### General
|Nombre|Características|Código abierto|Sistemas operativos|
|------|---------------|--------------|-------------------|
[`EN`] [FileMasta](https://ohhsodead.github.io/FileMasta/) `General`|Búsqueda de enlaces directos gracias a [od-database](https://github.com/simon987/od-database): <ul><li>Video <li>Música <li>Libros <li>Software <li>Videojuegos <li>Subtítulos <li>Entre otros|`Sí`, disponible en [Github](https://github.com/ohhsodead/FileMasta)|Windows
[`EN`] [RipMeApp](https://github.com/RipMeApp/ripme) `Imágenes`|Requerido: Java. </br> [Lista](https://github.com/ripmeapp/ripme/wiki/Supported-Sites) completa de sitios soportados.  </br><ul><li>Descarga imágenes en grupo y videos. <li>Revisa direcciones en búsqueda de nuevas actualizaciones. <li>Lista en espera.</ul>|`Sí`, disponible en [Github](https://github.com/RipMeApp/ripme).|Windows </br> macOS </br> Linux
[`EN`] [gallery-dl](https://github.com/mikf/gallery-dl) `Imágenes`|<ul><li>Requerido: <ul><li>[Python](https://www.python.org/downloads/) 3.4+. <li>[Requests](https://requests.readthedocs.io/en/master/). <li>[youtube-dl](https://ytdl-org.github.io/youtube-dl/) para descarga de videos. </ul> <li>A través de la línea de comando. <li>Descargar galerías de imágenes y colecciones. <li> [Lista](https://github.com/mikf/gallery-dl/blob/master/docs/supportedsites.md) de sitios soportados.</ul>|`Sí`, disponible en [Github](https://github.com/mikf/gallery-dl)|Windows </br> macOS </br> Linux
[`EN`] [snscrape](https://github.com/JustAnotherArchivist/snscrape) `Redes sociales`|<ul><li>Requerido: <ul><li>Python 3.6+ <li>libxml2 <li>libxslt</ul> <li>Búsqueda de perfiles usuario, hashtags, búsquedas en redes sociales. <li>Sitios soportados: Facebook, Gab, Instagram, Twitter, VKontakte, Sina Weibo.|`Sí`, disponible en [Github](https://github.com/JustAnotherArchivist/snscrape).|Windows </br> macOS </br> Linux
[`EN`] [Comics-DL](https://github.com/The-Eye-Team/Comics-DL)|<ul><li>Archivado de historietas <li>Sitios soportados: <ul><li>[readcomicsonline.ru](https://readcomicsonline.ru/) <li>[E-Hentai](https://e-hentai.org/) <li>[My Reading Manga](https://myreadingmanga.info/) <li>[Dounjins.com](https://doujins.com/) <li>[NHentai](https://nhentai.net/) <li>[Pururin](https://pururin.io/)</ul></ul>|`Sí`, disponible en [Github](https://github.com/The-Eye-Team/Comics-DL)|Windows </br> macOS </br> Linux

### Archivado de sitios web
|Nombre|Características|Lenguaje|Código abierto|Sistemas operativos|
|------|---------------|--------|--------------|-------------------|
[`EN`] [Webrecorder](https://webrecorder.io/)
[`EN`] [Web Archiving Integration Layer](https://github.com/machawk1/wail)|Archivado de sitios web en general.</br> Herramientas incluidas: <ul><li>[Heritrix 3.2.0](https://github.com/internetarchive/heritrix3) <li>[OpenWayback 2.4.0](https://github.com/iipc/openwayback) <li>Apache Tomcat <li>[pyinstaller](https://github.com/pyinstaller/pyinstaller/) <li>[MemGator](https://github.com/oduwsdl/memgator)</ul>|Python|`Sí`, disponible en [Github](https://github.com/oduwsdl/memgator)|Windows </br> macOS

- Multimedia
- Herramienta de descarga
    - Aplicación nativa
        - Archivado de sitios web

        - ^^EN^^ [chimera](https://notabug.org/Aesir/chimera) `Spotify`
            - Funciones
                - Descarga música directamente desde servidores de pago
                - Interfaz API disponible
            - **Necesario cuenta de pago** para todos excepto Deezer
            - Servidores disponibles
                - Deezer 
                - Tidal 
                - Qobuz 
                - soundcloud 
                - napster 
                - Google Play Music
                    - Necesario un móvil conectado a Internet
                - Spotify
            - Código abierto
            - Sistemas operativos
                - Windows
                - OSX (no probado en su totalidad por el autor)
                - Linux (no probado en su totalidad por el autor)
                - Android (no probado en su totalidad por el autor) [Instalación](https://notabug.org/Aesir/chimera/wiki/Android)
        - ^^EN^^ [Crunchyroll Downloader](https://github.com/ThePBone/CrunchyrollDownloader)
            - Funciones
                - Descarga episodios completos en .mp4
                - Descarga listas de reproducción de emisión directa .m3u HLS
                - Eliminar restricciones regionales (proxy nativo en Estados Unidos de América)
                - Filtrar episodios por series, temporadas y colecciones
            - Código abierto
            - Sistemas operativos
                - Windows
                - macOS
                - Linux
        - ^^EN^^ [Deezloader Remix](https://notabug.org/RemixDevs/DeezloaderRemix)  `Deezer`
            - Descarga de forma directa de los servidores de Deezer
            - Funciones
                - Descarga en formato .mp3 y .flac
                - Busca y descubre música en la misma aplicación
                - Descarga música directamente de un enlace URL
                - Descarga la discografía de un artista
                - Ve tu lista de reproducción pública en Deezer
                - Archivos de música con metadatos (ID3 y comentarios Vorbis)
                - Implementación con las API de Spotify (Sin servicios de terceros)
            - Código abierto
            - Sistemas operativos
                - Windows
                - Linux
                - macOS
        - ^^EN^^ [GooBooDoo](https://github.com/vaibhavk97/GoBooDo) `Google Play Books`
            - Funciones
                - Descarga libros con vista previa disponible de Google Libros y proxys.
            - Compila en Python
            - Requerido
                - requests
                - bs4
                - Pillow
                - fpdf
                - html5lib
        - ^^EN^^ [Raccoon](https://raccoon.onyxbits.de/) `Google Play Store`
            - Funciones
                - Descarga .apk de los servidores de Google
                - Evita bloqueos regionales
                - Instala "split apk"
                - Descarga versiones anteriores .apk
                - Simula un ambiente móvil muy específico (es necesario un dispositivo móvil y **adb**) y descargas específicas para un modelo específico Android.
            - Compilado en Java
            - Sistemas operativos
                - Windows
                - Linux
                - macOS
        - Instagram
            - ^^EN^^ [Instagram Scraper](https://github.com/dankmemes/instagram-scraper)
                - Descarga de Instagram
                    - Perfiles privados (siempre y cuando tengas acceso) o públicos
                    - Hashtags
                - Compila en Python
                - Código abierto
            - ^^EN^^ [Instaloader](https://instaloader.github.io/)
                - Detecta cambios en el nombre de usuario
                - Funciones:
                    - Perfiles privados (siempre y cuando tengas acceso) o públicos
                    - Historias
                    - Noticias
                    - Imágenes guardadas
                    - Descripción de publicaciones
                    - Comentarios
                    - Hashtag
                - Compila en Python
                - Código abierto
            - ^^EN^^ [PyInstaLive](https://github.com/notcammy/PyInstaLive)
                - Requisitos
                    - [ffmpeg](https://ffmpeg.org/download.html)
                    - [Git](https://git-scm.com/downloads)
                    - [Python 2.7.x or 3.5>=](https://www.python.org/downloads/)
                    - [pip + setuptools](https://pip.pypa.io/en/stable/installing/)
                - Funciones
                    - Transmisiones en vivo (también detecta transmisiones en vivo donde el usuario específico está de invitado)
                    - Repeticiones guardadas de transmisiones en vivo
                    - Transmisiones en vivo y repetición de comentarios
                    - Transmisiones en vivo y repeticiones guardadas de las personas que sigues
                - Compila en Python
                - Código abierto
            - ^^EN^^ [InstaLooter](https://github.com/althonos/InstaLooter)
                - Funciones
                    - Descargar cualquier video o imagen de un perfil de usuario sin hacer uso del API de Instagram
                - Codigo abierto
                - Requerido
                    - coloredlogs
                    - dateutil
                    - docopt
                    - fs
                    - requests
                    - six
                    - tenacity
                    - tqdm
                    - verboselogs
        - ^^EN^^ [Megabasterd](https://github.com/tonikelope/megabasterd) `Mega`
            - Funciones
                - Evita los límites de los servidores de Mega.nz
                - Interfaz de usuario pésimo
            - Servidor disponible
                - [Mega](https://mega.nz)
            - Código abierto
                - Compila en Java
                - Actualizaciones constantes
            - Sistemas operativos
                - Windows
                - macOS
                - Linux
        - Reddit
            - ^^EN^^ [timesearch](https://github.com/voussoir/timesearch)
                - Archivados de subreddits
                - Código abierto
                - Requerido (revisar detalles en la página en GitHub)
                    - markdown
                    - praw
                    - voussoirkit
            - ^^EN^^ [Reddit Media Downloader](https://github.com/shadowmoose/RedditDownloader)
                - Funciones
                    - Escanear comentarios y entradas de distintos sitios de Reddit en búsqueda de imágenes o videos 
                        - Ejemplo
                            - Lista de tus fotos a favor
                            - Lista de entradas guardadas
                            - Subreddits
                            - Multireddits de usuario
                    - Filtros de búsqueda
                        - Ejemplo
                            - Entradas con la palabra tal en el título con un mínimo de tantos votos a favor en tal subreddit
                - Sistemas operativos
                    - Windows
                    - macOS
                    - Ubuntu
        - Spotify
            - ^^EN^^ [Downtify Premium](https://github.com/Superhackman/downtify-premium)
                - Bifurcado de [Downtify](https://github.com/Shawak/downtify)
                - Funciones
                    - Descarga directamente de los servidores de Spotify
                    - Formato .mp3
                - Necesario cuenta de pago
            - ^^EN^^ [XSpotify](https://github.com/meik97/XSpotify)
                - Descarga directamente de los servidores de Spotify
                - Funciones
                    - Calidad y formato (cuenta gratuita): 160 kb/s, 32-bit, 44100 Hz .ogg
                    - Calidad y formato (cuenta de pago): 320 kb/s, 32-bit, 44100 Hz .ogg
                    - Metadatos: artista, título, álbum y caratula del álbum
                - Código abierto
                - Requerido
                    - Microsoft's [Visual C++ Redistributable Runtimes](https://github.com/abbodi1406/vcredist)
            - Extra
                - ^^EN^^ [SpotMyBackup](https://www.spotmybackup.com/)
                    - Funciones
                        - Exporta e importa tu lista de reproducción y canciones de Spotify
                    - [Código abierto](https://github.com/secuvera/SpotMyBackup/)
        - ^^EN^^ [Udeler GUI](https://github.com/FaisalUmair/udemy-downloader-gui) `Udemi`
            - Necesario una cuenta de pago de Udemy
            - Funciones
                - Calidad de video
                - Varios cursos a la vez
                - Pausar y continuar la descarga
                - Escoge el directorio de descarga
                - Multilenguaje
                    - Inglés
                    - Italiano
                    - Español
            - Código abierto
            - Sistemas operativos
                - Windows
                - macOS
                - Linux
    - Aplicación web
        - General (aplicación web que tienen soporte para varios sitios)
            - Banco de imágenes
                - ^^EN^^ [Downloader.la](https://downloader.la/)
                    - Funciones
                        - Descarga imágenes sin marca de agua de varios bancos de imágenes
                    - Servidores disponibles
                        - Shutterstock
                        - Adobe Stoc
                        - Getty Images
                        - Picfair
                        - lovePik
                        - freePik
                        - 123RF
                        - +
                - ^^EN^^ [Tomato](https://tomato.to/)
                    - Funciones
                        - Descarga imágenes sin marca de agua de varios bancos de imágenes
                    - Servidores disponibles
                        - Adobestock 
                        - Gettyimages 
                        - 500px.com 
                        - Flickr
                        - 123RF
                        - Filmmagic 
                        - NBA Photostore
                        - +
            - Documentos
                - ^^EN^^ [DocDownloader](https://docdownloader.com/)
                    - Scribd
                    - Isuu
                    - Slideshare
                    - Academia.edu
        - Generador de enlaces de descarga de servidores de pago
            - filehostlist.miraheze.org	Lista completa
            - reevown.com		Uploaded (1GB/H), rapidgator (2 downloads per day), 1fichier, filefactory, uptobox, uploadboy (1GB), k2s (1GB)
            - hyperdebrid.net		depositfiles (3 enlaces/día), rapidgator (.5GB/día), turbobit (.5/day), uploaded (1.5GB/día), userscloud (1GB/día), zippyshare (ilimitado)
            - cocoleech.com		[5 enlaces/día] Goloady (300MB), Katfile (Ilimitado), Rapidgator (.5GB), Uploaded.net (1GB), Nitroflare (300MB), Zippyshare, Upload.ee, anonfile
            - dailyleech.com		6$/month
            - vnz-leech.com		Confusión
            - get4all.org		Confusión
        - Microsoft
            - ^^EN^^ [Generador de enlaces de la tienda de Microsoft](https://store.rg-adguard.net/)
                - Funciones
                    - Descarga directa desde los servidores de Microsoft
                    - Versiones disponibles
                        - Rápido
                        - Lento
                        - Prelanzamiento
                        - Por defecto
                - Requerido (solo uno es necesario)
                    - Enlace URL
                    - Identificación del producto
                    - Nombre de la familia del paquete
                    - Identificación de la categoría
            - ^^EN^^ [Generador de enlaces de .isos de Microsoft](https://tb.rg-adguard.net/public.php)
                - Funciones
                    - Descarga directa desde los servidores de Microsoft
                    - Versiones disponibles
                        - Tipo
                        - Versión
                        - Edición
                        - Lenguaje
        - ^^EN^^ [APKCombo](https://apkcombo.com/es-pe/apk-downloader/) `Google Play Store`
            - Funciones
                - Desde desde los servidores de la tienda de Googl
                - Opciones múltiples
                    - Tipo de dispositivo
                        - Por defecto
                        - Teléfono
                        - Tableta
                        - Televisión
                    - Arquitectura del dispositivo
                        - Por defecto
                        - armeabi-v7a
                        - arm64-v8a
                        - x86
                        - x86_64
                    - Versión de Android
                        - Por defecto
                        - 4.4
                        - 5.0
                        - 5.1
                        - 6.0
                        - 7.0
                        - 7.1
                        - 8.0
                        - 8.1
                        - 9.0
                        - 10
                - Evitar restricciones regionales
        - ^^EN^^ [DLScrib](https://dlscrib.com/) `Scribd`
            - Funciones
                - Descarga documentos desde los servidores de Scribd
    - Línea de comando
        - ^^EN^^ [aria2](https://aria2.github.io/)
            - Características
                - Multiconección y multidescarga
                - Uso de poco espacio y pocos recursos
                - Cliente Bittorrent
                - Metaenlaces activado
                    - [The Metalink Download Description Format](http://tools.ietf.org/html/rfc5854) (aka Metalink v4)

                    - Metalink version 3 
                    - [Metalink/HTTP](http://tools.ietf.org/html/rfc6249).
                - Control remoto
                    - JSON-RPC (HTTP y WebSocket)
                    - XML-RPC
            - Protocolos
                - HTTP/HTTPS 
                - FTP 
                - SFTP
                - BitTorrent
                - Metalink
- Mejora personal
    - ^^EN^^ [Entrenamiento físico](nytimes.com/interactive/projects/well/workouts/)
    - ^^EN^^ [Typing](typing.com)
        - Funciones
            - Practica mecanografía
    - Organización del tiempo
        - ^^EN^^ [Timo](https://hellotimo.co/)
            - Simple y bonita interfaz
            - Funciones
                - Seguimiento de lo que tienes que hacer
                - Modo noche
        - ^^EN^^ [TodoHQ](https://todohq.co/)
            - Funciones
                - Crea listas de cosas por realizar
                - Sincronización
                - Modo noche disponible
            - Simple y bonita interfaz
