(function($){

	$(document).ready(function(){
		var $capcom = $('#capcomSection');
		var $dc = $('#dcSection');
		var $marvel = $('#marvelSection');

		var capcomImg = ['chun-li.png', 'guile.png', 'ken.png', 'ryu.png', 'vega.png'];
		var capcomName = ['Chun Li', 'Guile', 'Ken', 'Ryu', 'Vega'];
		var dcImg = ['batman.png', 'doctor_fate.png', 'green_arrow.png', 'superman.png', 'wonder_woman.png'];
		var dcName = ['Batman', 'Doctor Fate', 'Green Arrow', 'Superman', 'Wonder Woman'];

		var marvelImg = ['black_widow.png', 'captain_america.png', 'deadpool.png', 'doctor_strange.png', 'iron_man.png'];
		var marvelName = ['Black Widow', 'Captain America', 'Deadpool', 'Doctor Strange', 'Iron Man'];

		var capcomFigs = '';
		var dcFigs = '';
		var marvelFigs = '';
		var len = capcomImg.length; //Number of Images

		//sets up figures
		for(var i = 0; i < len; i++){
			capcomFigs += '<figure><img src="inc/img/capcom/'+capcomImg[i]+'"><figcaption>'+capcomName[i]+'</figcaption></figure>';
		}

		for(var i = 0; i < len; i++){
			dcFigs += '<figure><img src="inc/img/dc/'+dcImg[i]+'"><figcaption>'+dcName[i]+'</figcaption></figure>';
		}

		for(var i = 0; i < len; i++){
			marvelFigs += '<figure><img src="inc/img/marvel/'+marvelImg[i]+'"><figcaption>'+marvelName[i]+'</figcaption></figure>';
		}
		//populate figures
		$('#capcomDefault .figWrapper').html(capcomFigs);
		$('#dcDefault .figWrapper').html(dcFigs);
		$('#marvelDefault .figWrapper').html(marvelFigs);

		//Capcom
		$capcom.on('click', 'figure', function(){
			var $this = $(this);
			$('#capcomSelect .figWrapper').append($this[0]);
		});
		

		$('#btnResetCapcom').on('click', function(){

			//remove all items from default section
			$('#capcomDefault .figWrapper').html('');
			//remove all items from selected section
			$('#capcomSelect .figWrapper').html('');

			//reprint default section
			$('#capcomDefault .figWrapper').html(capcomFigs);
		});

		//DC
		$dc.on('click', 'figure', function(){
			var $this = $(this);
			$('#dcSelect .figWrapper').append($this[0]);
		});


		$('#btnResetDc').on('click', function(){

			//remove all items from default section
			$('#dcDefault .figWrapper').html('');
			//remove all items from selected section
			$('#dcSelect .figWrapper').html('');

			//reprint default section
			$('#dcDefault .figWrapper').html(dcFigs);
		});

		//Marvel
		$marvel.on('click', 'figure', function(){
			var $this = $(this);
			$('#marvelSelect .figWrapper').append($this[0]);
		});

		$('#btnResetMarvel').on('click', function(){

			//remove all items from default section
			$('#marvelDefault .figWrapper').html('');
			//remove all items from selected section
			$('#marvelSelect .figWrapper').html('');

			//reprint default section
			$('#marvelDefault .figWrapper').html(marvelFigs);
		});

	});
})(jQuery)