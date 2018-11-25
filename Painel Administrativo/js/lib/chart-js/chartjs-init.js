( function ( $ ) {
	"use strict";

	//radar chart
	var ctx = document.getElementById( "radarChart" );
	ctx.height = 221;
	var myChart = new Chart( ctx, {
		type: 'radar',
		data: {
			labels: [ "São Paulo", "Guarulhos", "Alphaville", "Campinas", "Juiz de Fora", "Belo Horizonte", "Maceió", "Fortaleza", "Rio de Janeiro", "Brasilia" ],
			datasets: [
				{
					label: "Mês Anterior",
					data: [ 28, 12, 40, 19, 63, 21, 14, 21, 11, 7],
					borderColor: "rgba(0, 123, 255, 0.7",
					borderWidth: "1",
					backgroundColor: "rgba(0, 123, 255, 0.5)"

                            },
				{
					label: "Mês Atual",
					data: [ 65, 32, 66, 45, 56, 37, 27, 41, 21, 33 ],
					borderColor: "rgba(0, 123, 255, 0.6)",
					borderWidth: "1",
                    backgroundColor: "rgba(239, 83, 80, 0.42)"

                            }
                        ]
		},
		options: {
			legend: {
				position: 'top'
			},
			scale: {
				ticks: {
					beginAtZero: true
				}
			}
		}
	} );
} )( jQuery );
