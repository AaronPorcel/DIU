/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.HichAaron";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/AaronPorcel/DIU";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Gonzalo Sanz Nieto",
				Photo: "gonzalo.jpg",
				Quote: "Hay que saber disfrutar sin pasarse",
				Age: 20,
				Occupation: "Estudiante de Matemáticas",
				Family: "Vive con sus padres y hermano menor, y tiene pareja.",
				Location: "Madrid (Chamartín)",
				Character: "Le gusta cuidarse.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Disfrutar la vida universitaria antes de terminar la carrera", "Conocer otras culturas y tradiciones"],
				Frustrations: ["A su pareja no le gusta viajar, y no suele acompañarle", "Le gustaría tener más tiempo libre y hacer más deporte"],
				Bio: "Es de Madrid, se crió en Ciudad Jardín y sigue viviendo con sus padres. Es un estudiante sobresaliente y le gusta descubrir nuevas cosas. Tiene un grupos de amigos desde el instituto con el que hace viajes ocasionalmente. Conoció a su novia en la facultad.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos: "Se acerca Semana Santa. Había visitado a Granada con sus padres y ahora quiere volver con su grupo de amigos.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Jennifer Wilson",
				Photo: "jennifer.jpg",
				Quote: "El planeta es muy grande, hay que descubrirlo",
				Age: 29,
				Occupation: "Fotógrafa",
				Family: "Su padres y hermana viven en Australia",
				Location: "Australia (Hobart)",
				Character: "Le fascina enseñar el mundo a través de sus fotografías.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Mostrar  lo grande y bello que es el mundo.", "Aprender de otras culturas.", "Crear una familia."],
				Frustrations: ["No encontrar la pareja adecuada.", "Solo sabe inglés.", "Viaja sola."],
				Bio: "Nació en Hobart, tiene una hermana mayor y vive con sus padres. Después del instituto estudió periodismo, y tras terminar la carrera, inició un blog en el que publica todos los viajes que ha realizado desde entonces. Ha tenido varias parejas pero al viajar mucho no han sido estables. Le gustaría encontrar una pareja que viajase con ella, y que trás recorrer el mundo formasen una familia juntos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos: "Está haciendo un viaje por el sur de europa y una de las ciudades que tiene en el itinerario es Granada." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])