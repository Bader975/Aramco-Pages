 // chart NO-1
    const dataFreshGraduates = {
      labels: ['Fresh Graduates',

      ],
      datasets: [{
        label: 'Fresh Graduates',
        data: [67, 33],
        backgroundColor: [
          'rgb(0, 128, 0)',
          'rgb(224, 255, 255)',

        ],
        hoverOffset: 2
      }]
    };
    const config = {
      type: 'doughnut',
      data: dataFreshGraduates,
      options: {
        responsive: false,
        layout: {
          padding: {
            right: 100
          }
        }

      }
    };
    const chartFreshGraduates = new Chart(
      document.getElementById('chartFreshGraduates'),
      config
    );
    // chart No 1 done
    //****************************************************************
    // chrat No 2
    const datajobqualified = {
      labels: ['Job Qualified',


      ],
      datasets: [{
        label: 'Job Qualified',
        data: [18, 82],
        backgroundColor: [
          'rgb(0, 128, 0)',
          'rgb(224, 255, 255)',

        ],
        hoverOffset: 2
      }]
    };
    const configjobqualified = {
      type: 'doughnut',
      data: datajobqualified,
      options: {
        responsive: false,
        layout: {
          padding: {
            right: 100
          }
        }

      }
    };
    const chartjobqualified = new Chart(
      document.getElementById('chartjobqualified'),
      configjobqualified
    );
    // Chart done
    //****************************************************************
    //chart No 3
    const datasaudi = {
      labels: ['Saudi',

      ],
      datasets: [{
        label: 'Saudi',
        data: [67, 33],
        backgroundColor: [
          'rgb(255,165,0)',
          'rgb(224, 224, 255)',

        ],
        hoverOffset: 2
      }]
    };
    const configsaudi = {
      type: 'doughnut',
      data: datasaudi,
      options: {
        responsive: false,
        layout: {
          padding: {
            right: 100
          }
        }

      }
    };
    const chartsaudi = new Chart(
      document.getElementById('chartsaudi'),
      configsaudi
    );

    // Chart done


    //****************************************************************
    //chart No 4
    const dataexpat = {
      labels: ['Expat',

      ],
      datasets: [{
        label: 'Expat',
        data: [18, 82],
        backgroundColor: [
          'rgb(255,165,0)',
          'rgb(224, 224, 255)',
        ],
        hoverOffset: 2
      }]
    };
    const configexpat = {
      type: 'doughnut',
      data: dataexpat,
      options: {
        responsive: false,
        layout: {
          padding: {
            right: 100
          }
        }

      }
    };
    const chartexpat = new Chart(
      document.getElementById('chartexpat'),
      configexpat
    );

    //****************************************************************
    // chart No 5
    const dataus = {
      labels: ['US Talent',

      ],
      datasets: [{
        label: 'US Talent',
        data: [67, 33],
        backgroundColor: [
          'rgb(28, 102, 199)',
          'rgb(224, 224, 255)',

        ],
        hoverOffset: 2
      }]
    };



    const configus = {
      type: 'doughnut',
      data: dataus,
      options: {

        responsive: false,
        layout: {
          padding: {
            right: 150
          }
        }


      }
    };
    const chartus = new Chart(
      document.getElementById('chartus'),
      configus
    );
    //****************************************************************
    //chart No 6
    const dataglobal = {
      labels: ['Global Talent',

      ],
      datasets: [{
        label: 'Global Talent',
        data: [18, 82],
        backgroundColor: [
          'rgb(28, 102, 199)',
          'rgb(224, 224, 255)',

        ],
        hoverOffset: 2
      }]
    };
    const configglobal = {
      type: 'doughnut',
      data: dataglobal,
      options: {
        responsive: false,
        layout: {
          padding: {
            right: 160
          }
        }

      }
    };

    const chartglobal = new Chart(
      document.getElementById('chartglobal'),
      configglobal
    );

    //****************************************************************
    // chart No 7

    const dataaoa = {
      labels: ['AOA Talent',

      ],
      datasets: [{
        label: 'AOA Talent',
        data: [18, 82],
        backgroundColor: [
          'rgb(28, 102, 199)',
          'rgb(224, 224, 255)',

        ],
        hoverOffset: 2
      }]
    };
    const configaoa = {
      type: 'doughnut',
      data: dataaoa,
      options: {
        responsive: false,
        borderWidth: 1,


        layout: {
          padding: {
            right: 180
          }
        }

      }

    };
    const chartaoa = new Chart(
      document.getElementById('chartaoa'),
      configaoa
    );
    //**************************************

    var opts = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#000000' // Fill color

      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 0, max: 20 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 20, max: 60 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 60, max: 100 }, // Green

      ],
      staticLabels: {
        font: "13px sans-serif",  // Specifies font
        labels: [0, 20, 40, 60, 90],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },
      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }

    };
    var target = document.getElementById('foo'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 36; // set animation speed (32 is default value)
    gauge.set(50); // set actual value

    var opts2 = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#000000' // Fill color

      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 150, max: 200 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 90, max: 150 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 0, max: 90 }, // Green

      ],
      staticLabels: {
        font: "12px sans-serif",  // Specifies font
        labels: [50, 90, 120, 150, 180],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },
      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }

    };

    var target = document.getElementById('foo2'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts2); // create sexy gauge!
    gauge.maxValue = 200; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(100); // set actual value


    //***************************************************************************

    var opts3 = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#11111' // Fill color

      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 0, max: 20 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 20, max: 60 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 60, max: 100 }, // Green


      ],
      staticLabels: {
        font: "13px sans-serif",  // Specifies font
        labels: [0, 20, 40, 60, 90],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },
      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }

    };
    var target = document.getElementById('foo3'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts3); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 36; // set animation speed (32 is default value)
    gauge.set(20); // set actual value
    //**************************************************

    var opts4 = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius

      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#000000' // Fill color


      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 150, max: 200 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 90, max: 150 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 0, max: 90 }, // Green

      ],
      staticLabels: {
        font: "12px sans-serif",  // Specifies font
        labels: [50, 90, 120, 150, 180],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },
      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }
    };

    var target = document.getElementById('foo4'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts4); // create sexy gauge!
    gauge.maxValue = 200; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 36; // set animation speed (32 is default value)
    gauge.set(100); // set actual value

    //*************************************************************


    var opts5 = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#000000' // Fill color

      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 0, max: 20 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 20, max: 60 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 60, max: 100 }, // Green

      ],
      staticLabels: {
        font: "13px sans-serif",  // Specifies font
        labels: [0, 20, 40, 60, 90],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },

      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }

    };

    var target = document.getElementById('foo5'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts5); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value

    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 36; // set animation speed (32 is default value)
    gauge.set(40); // set actual value


    //*************************************************



    var opts6 = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.38, // The line thickness
      radiusScale: 1, // Relative radius

      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.097, // The thickness
        color: '#000000' // Fill color


      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [
        { strokeStyle: "#F03E3E", min: 150, max: 200 }, // Red from 100 to 130
        { strokeStyle: "#FFDD00", min: 90, max: 150 }, // Yellow
        { strokeStyle: "#FFDD00", min: 70, max: 80 }, // Yellow
        { strokeStyle: "#30B32D", min: 0, max: 90 }, // Green

      ],
      staticLabels: {
        font: "12px sans-serif",  // Specifies font
        labels: [50, 90, 120, 150, 180],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
      },
      // renderTicks is Optional

      renderTicks: {
        divisions: 9,
        divWidth: 1.2,
        divLength: 0.59,
        divColor: '#333333',
        subDivisions: 8,
        subLength: 0.26,
        subWidth: 0.1,
        subColor: '#666666'

      }
    };

    var target = document.getElementById('foo6'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts6); // create sexy gauge!
    gauge.maxValue = 200; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 36; // set animation speed (32 is default value)
    gauge.set(100); // set actual value

