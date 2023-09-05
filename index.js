$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        //$('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        //$('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
  
  	(function() { // On utilise une IEF pour ne pas polluer l'espace global
		var storage = {}; // Contient l'objet du div en cours de déplacement
		function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
			if (element.attachEvent) {
				element.attachEvent('on' + event, func);
			}
			else {
				element.addEventListener(event, func, true);
			}
		}
		
		function init() { // La fonction d'initialisation
			var elements = document.getElementsByTagName('img'), elementsLength = elements.length;
			for (var i = 0 ; i < elementsLength ; i++) {
				if (elements[i].className === 'vol') {
					addEvent(elements[i], 'mousedown', function(e) { // Initialise le drag & drop
						var s = storage;
						s.target = e.target || event.srcElement;
						s.offsetX = e.clientX - s.target.offsetLeft;
						s.offsetY = e.clientY - s.target.offsetTop;
					});
					addEvent(elements[i], 'mouseup', function() { // Termine le drag & drop
						storage = {};
					});
				}
			}
			
			addEvent(document, 'mousemove', function(e) { // Permet le suivi du drag & drop
				var target = storage.target;
				if (target) {
					target.style.top = e.clientY - storage.offsetY + 'px';
					target.style.left = e.clientX - storage.offsetX + 'px';
				}
			});
		}
		
		init(); // On initialise le code avec notre fonction toute prête
	})();

(function() { // On utilise une IEF pour ne pas polluer l'espace global
		var storage = {}; // Contient l'objet du div en cours de déplacement
		function addEvent(element, event, func) { // Une fonction pour gérer les événements sous tous les navigateurs
			if (element.attachEvent) {
				element.attachEvent('on' + event, func);
			}
			else {
				element.addEventListener(event, func, true);
			}
		}
		
		function init() { // La fonction d'initialisation
			var elements = document.getElementsByTagName('img'), elementsLength = elements.length;
			for (var i = 0 ; i < elementsLength ; i++) {
				if (elements[i].className === 'vol') {
					addEvent(elements[i], 'mousedown', function(e) { // Initialise le drag & drop
						var s = storage;
						s.target = e.target || event.srcElement;
						s.offsetX = e.clientX - s.target.offsetLeft;
						s.offsetY = e.clientY - s.target.offsetTop;
					});
					addEvent(elements[i], 'mouseup', function() { // Termine le drag & drop
						storage = {};
					});
				}
			}
			
			addEvent(document, 'mousemove', function(e) { // Permet le suivi du drag & drop
				var target = storage.target;
				if (target) {
					target.style.top = e.clientY - storage.offsetY + 'px';
					target.style.left = e.clientX - storage.offsetX + 'px';
				}
			});
		}
		
		init(); // On initialise le code avec notre fonction toute prête
	})();
