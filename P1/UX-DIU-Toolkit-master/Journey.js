/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.HichAaron";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/AaronPorcel/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Gonzalo Sanz Nieto",
                Photo: "gonzalo.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Sus amigos y él quieren preparar un viaje en Semana Santa",
                touch1: "Agenda",
                feel1: "5",
                con1: "Ver cual es el lugar más adecuado para su estancia en la ciudad",
                ima1: "cartoon-teamthinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Investiga sobre hostels de Granada, y encuentra un blog en el que aparecen varios.",
                touch2: "Móvil",
                feel2: "4",
                con2: "Encontrar el blog adecuado para información sobre hostels",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Tras leer el blog tienen que decidir entre varios hostels, finalmente Carlota Braun les llama la atención a sus amigos y a él.",
                touch3: "Móvil",
                feel3: "3",
                con3: "Les cuesta decidir en que hostel se hospedarán.",
                ima3: "cartoon-deciding.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entra en la web de Carlota Braun y mira qué habitaciones hay disponibles.",
                touch4: "Móvil",
                feel4: "4",
                con4: "Encontrar una habitación en la que quepan todos",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentran la habitación adecuada.",
                touch5: "Móvil",
                feel5: "3",
                con5: "Un amigo está indeciso sobre si viajará o no. Aún si eligen la habitación contando con él.",
                ima5: "cartoon-deciding2.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, y en la próxima también se ocupará.",
                touch6: "Móvil",
                feel6: "2",
                con6: "Ver quién pondrá su tarjeta de crédito para realizar el pago.",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Jennifer Wilson",
                Photo: "jennifer.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Está haciendo un tour por el sur de Europa y quiere visitar España.",
                touch1: "Mapa",
                feel1: "5",
                con1: "Quiere ir a una ciudad que sea multicultural.",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Visita un foro de viajes sobre España.",
                touch2: "Portátil",
                feel2: "4",
                con2: "La gente del foro le recomienda ciudades distintas.",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se decide por Granada.",
                touch3: "Portátil",
                feel3: "4",
                con3: "Encontrar un alojamiento barato.",
                ima3: "cartoon-PChappy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca un hostel porque quiere conocer otras personas y son alojamientos baratos.",
                touch4: "Portátil",
                feel4: "4",
                con4: "En Granada hay pocos hostels y son un poco diferentes a los que ella suele visitar.",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide quedarse con Carlota Braun y busca una cama.",
                touch5: "Portátil",
                feel5: "1",
                con5: "Se da cuenta de que sólo se pueden reservar habitaciones completas.",
                ima5: "cartoon-PCSurprised.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente cambia a otro hostel.",
                touch6: "Portátil",
                feel6: "1",
                con6: "Ha perdido el tiempo.",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



