$( function () {
	"use strict";

	Morris.Bar( {
        element: 'chart-bairros',
		data: [ {
                diaSemana: 'Segunda',
				Tribos: 0,
				Remix: 0,
				PortoAlegre: 90,
				Sabugito: 0,
				outros: 0
        }, {
                diaSemana: 'Terça',
                Tribos: 10,
                Remix: 60,
                PortoAlegre: 40,
                Sabugito: 80,
                outros: 120
        }, {
                diaSemana: 'Quarfa',
                Tribos: 120,
                Remix: 10,
                PortoAlegre: 90,
                Sabugito: 30,
                outros: 50
        }, {
                diaSemana: 'Quinta',
                Tribos: 0,
                Remix: 0,
                PortoAlegre: 120,
                Sabugito: 0,
                outros: 0
        }, {
                diaSemana: 'Sexta',
                Tribos: 0,
                Remix: 0,
                PortoAlegre: 0,
                Sabugito: 150,
                outros: 0
        }, {
                diaSemana: 'Sabado',
                Tribos: 160,
                Remix: 75,
                PortoAlegre: 30,
                Sabugito: 60,
                outros: 90
        }, {
                diaSemana: 'Domingo',
                Tribos: 10,
                Remix: 120,
                PortoAlegre: 40,
                Sabugito: 60,
                outros: 30
        }


        ],
		colors: [ '#26DAD2', '#fc6180', '#62d1f3', '#ffb64d', '#4680ff' ],
        xkey: 'diaSemana',
        ykeys: ['Tribos', 'Remix', 'PortoAlegre', 'Sabugito', 'outros' ],
        labels: ['Tribos', 'Remix', 'PortoAlegre', 'Sabugito', 'Outros' ],
		pointSize: 0,
		lineWidth: 0,
		resize: true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		hideHover: 'auto'
	} );

    Morris.Donut({
        element: 'donut_chart_1',
        data: [
            { label: 'São Paulo', value: 47 },
            { label: 'Paraná', value: 23 },
            { label: 'Minas', value: 15 },
			{ label: 'Rio de Janeiro', value: 6 },
			{ label: 'Rio Grande do Sul', value: 5 },
			{ label: 'Pernambuco', value: 3 },
			{ label: 'Amazonas', value: 1 },
        ],
        colors: [
            '#26DAD2', '#fc6180', '#ffb64d'
        ],
        formatter: function (y) { return y + "%" }
    });

} );
