<!DOCTYPE html>
<html lang="fr">

<head>
	<title>index.php</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/stylehomepage.css" type="text/css" />
</head>

<body>
	<div class="page">

		<!-------------------------------------------------------------------- début de page  ----------------------------------------------------------->
		<div class="menu">
			<div class="information-bar">
				<ul>
					<p class="name">Jean Paris BTS SIO 2</p>
					<a href="pdfreader/web/viewer.html">
						<li class="active">CV</li>
					</a>
					<a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:0c870d7f-b65d-48c7-b6f8-35ea910810de">
						<li>test CV</li>
					</a>
					<li>Veil : Technologique</li>
					<a href="index.php">
						<li>Menu</li>
					</a>
					<a href="Calendar.html">
						<li>stage</li>
					</a>
					<a href="homepage.php">
						<li>Home</li>
					</a>
				</ul>
				<div class="profile">
					<img src="images/jean.jpg">
				</div>
			</div> 
		</div>
		<div class="bio">
			Je suis actuellement étudiant en 2e année du BTS informatique appelé aussi BTS SIO (service informatique aux organisations), au pôle supérieur Baudimont Saint Charles à Arras avec une spécialité SISR
			(solutions d’infrastructure, systèmes et réseaux).<br>Durant cette année de BTS j’apprends les différents types d’architectures des réseaux informatiques et notamment comment les installer, les administrer,
			les protéger et gérer la maintenance des équipements. De manière concrète lors de la formation j’apprends par exemple comment installer les différents services DHCP, IIS (serveur web), AD (annuaire), DNS,
			pfsens et autres pour répondre aux demandes lors des projets pratiques encadrés visant à reproduire des contextes d’entreprises . Durant la 1ère année j’ai également appris lors des cours de programmation
			à coder un site internet simple avec la mise en place d’un CRUD connecté à une base de données mais aussi le langage C et Python.
			<br><br>Au cours de ma 2e année de BTS en réseau nous avons mit en place progressivement en équipe de 2 une architecture avec 3 réseaux distinct :<br>- Une DMZ en 10.0.3.0 /24 avec comme passerelle par défault 10.0.3.254 /24
			<br>- Un Lan en 172.16.3.0 /24 avec comme passerelle par défault 172.16.3.254 /24<br>- Un Wan en 192.168 avec comme passerelle par défault 192.168.3.243 /24<br> le tout connecté à un routeur Zyxel à 3 pattes
			faisant aussi firewall. le tout est sécurisé par des Vlans que nous n'avons pas configuré mais qu'on pus tester par nous même en ligne de commande avec des Switch Cisco et avec l'interface graphique
			d'un Switch HP.<br><br> Le but de de monter cette architecture et de décourvir les différents services évoqués avant mais aussi de voir les principes de sécurité qui en découle comme :
			La QOS (Quality Of Services, La tolérance de panne, Le PSI (Plan De Sécurité Informatique), La haute disponinilité.
		</div>

		<div class="boutonbio"><a href="#visioo" id="toVisioo"><span></span></a></div>



		<!-------------------------------------------------------------------- mettre un espace  --------------------------------------------------------->
		<div class='espace' id="visioo">
			<div>
				<!-------------------------------------------------------------------- >image visio  --------------------------------------------------------->

				<div class="visio"></div>
				<div class="boutonbio"><a href="#arch" id="toArch"><span></span></a></div>

				<!-------------------------------------------------------------------- mettre un espace  --------------------------------------------------------->

				<div class='espace' id="arch">
				</div>
				<!-------------------------------------------------------------------- Architecture 3 Tiers------------------------------------------------------->

				<div class='cardarch'>
					<div class='infoarch'>
						<h1 class='title'>Architecture 3 Tiers</h1>
						<p class=description>
							Prérequis : <br><br>- Un Windows serveur (web) avec IIS + PHP (même version que le
							site) installé avec webplateform installer <br>@IP : 10.0.3.101<br><br>- Un Windows serveur (SGBD) avec MYSQL installé
							avec webplateform installer + PHPMYADMIN ou NAVICAT (payant)<br>@IP : 10.0.3.100<br><br>- une machine cliente Windows 10<br>@IP : 10.0.3.50
						</p>
					</div>
				</div>
				<div class="messagedroite">
					Nous avons mis en place une architecture 3 tiers (avec une machine
					cliente et 2 serveurs) afin de comprendre comment héberger un site internet en
					dédiant un service pour chaque serveur. Concernant les services nous avons la
					BDD installée sur un serveur (APP) en 10.0.0.100, le IIS sur le serveur web en
					10.0.0.99, les serveurs communiquent entre eux étant donné qu'ils sont dans le même réseau. Mais
					pour que l’infrastructure puisse marcher nous avons défini au site internet ou aller
					chercher sa Base De Donnée via le fichier config en indiquant l’@ip du SGBD, et
					au serveur APP vers qui pointer dans le fichier utilisateur.
				</div>
				<div class="centrer">
					<a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:f8d9bdda-c852-46a7-b061-a0567c127eaa" class="coeur">
						Voir la Documentation
					</a>
				</div>

				<div class="bouton"> <a href="#eon" id="toEon"><span></span></a></div>

				<!-------------------------------------------------------------------- mettre un espace  --------------------------------------------------------->
				<div class='espace' id="eon">
				</div>
				<!-------------------------------------------------------------------- Architecture eon------------------------------------------------------->
				<div class='cardeon'>
					<div class='infoeon'>
						<h1 class='title'>EON</h1>
						<p class=description></p>
						Voici le résultat obtenu après installation :
					</div>
				</div>
				<div class="messagegauche">
					Nous avons installés EON comme solution pour
					mettre en place de la SuperVision. Cette solution est installé
					sur une base Linux dans une machine virtuel. On lui a prédéfini
					une @IP en 172.16.3.253 afin qu’elle se retrouve dans le même réseau que les hôtes qu’
					on voudrai superviser mais aussi qu'elle puisse communiquer avec les machines des autres réseaux par le biais de la passerelle par défault
					et du zyxel.<br>La SuperVision nous permet d’avoir un œil audessus de chaque
					hôte du réseau afin de voir comment il se comporte, prévenir d’éventuel panne 
					matériel et logiciel mais également obtenir toutes les informations afin de faciliter
					la maintenance. EON n’est pas seulement une solution qui supervise des machines clientes,
					elle intègre aussi d’autres services comme notamment GLPI pour mettre en place de la gestion de ticket,
					FUSION INVENTORY et autres afin de mettre en place de la gestion d’incidence. Eon comporte également la bibliothèque ITIL d' qui permetautomatiser certaines actions si des incidences se
					répètent. Eon offre également un suivis graphique du service qu’elle propose ce qui permet de faciliter la
					compréhension du parc informatique . Un autre atout est qu’elle est une solution logiciel basé sur un hôte
					mais ou on peut y accéder depuis n’importe quel machine du même réseau via un navigateur internet en tapant
					son @ip. 
				</div>
				<div class="centrer">
					<a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:417c3288-42ea-4ee4-94c7-8ef89dc458ca" class="coeur2">
						Voir la Documentation
					</a>
				</div>

				<div class="boutong"> <a href="#nlb" id="toNlb"><span></span></a></div>

				<!-------------------------------------------------------------------- mettre un espace  --------------------------------------------------------->
				<div class='espace' id="nlb">
				</div>
				<!-------------------------------------------------------------------- NLB------------------------------------------------------->
				<div class='cardnlb'>
					<div class='infonlb'>
						<h1 class='title'>NLB</h1>
						<p class=description>Voici le résultat obtenu après installation :</p>
					</div>
				</div>

				<div class="messagedroite">
					Afin de mettre en place de la tolérance de panne sur nos serveurs web et ainsi augmenter la QOS nous les avons redondés, de tel façon que si l'un des 2 serveurs tombe ne panne, l'autre
					prenne le relai. Mettre en place de la redondance nous as poussé a installer la solution NLB (Network Load Balancing) afin de clusteriser nos serveurs WEBs. En plus de mettre en place de la tolérance de panne, l'intêret comme son 
					nom l'indique est de répartir la charge sur les différents serveurs qui sont dans le cluster pour alleger la charge globale et qu'un serveur ne se retrouve pas surchargé. La solution est donc est scalable, pour rajouter un serveur au 
					cluster il faut qu'il ait la même configuration du site internet et qu'il aille chercher le contenu du site internet sur un serveur de fichier. L'@IP du cluster regroupant les différent serveurs web, il sufit juste dans le dns d'associer
					l'hôte à l'@IP du cluster.
				</div>
				<div class="centrer">
					<a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:79cb0905-156b-4167-b7ad-b5e552ca29e6" class="coeur">
						Voir la Documentation
					</a>
				</div>

				<div class="boutonhaut"> <a href="#arch" id="toArch"><span></span></a></div>


				<!-------------------------------------------------------------------- dernière div avant de sortir du cadre de la page------------------------------------------------------->
			</div>
</body>
</body>

</html>