(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//import $ from 'jquery';
//import Chart from 'chart.js'
//
//Chart.defaults.LineWithLine = Chart.defaults.line;
//Chart.controllers.LineWithLine = Chart.controllers.line.extend({
//    draw: function draw(ease) {
//        Chart.controllers.line.prototype.draw.call(this, ease);
//        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
//            var activePoint = this.chart.tooltip._active[0],
//                ctx = this.chart.ctx,
//                x = activePoint.tooltipPosition().x,
//                topY = this.chart.scales['y-axis-0'].top,
//                bottomY = this.chart.scales['y-axis-0'].bottom;
//
//            // Draw the line
//            ctx.save();
//            ctx.beginPath();
//            ctx.moveTo(x, topY);
//            ctx.lineTo(x, bottomY);
//            ctx.lineWidth = 0.5;
//            ctx.strokeStyle = '#ddd';
//            ctx.stroke();
//            ctx.restore();
//        }
//    }
//});
//
//function simpleChartOptions(max) {
//    return {
//        maintainAspectRatio: true,
//        responsive         : true,
//        legend             : {display: false},
//        tooltips           : {enabled: false, custom: false},
//        elements           : {point: {radius: 0}, line: {tension: 0.3}},
//        scales             : {
//            xAxes: [{gridLines: false, scaleLabel: false, ticks: {display: false}}],
//            yAxes: [{gridLines: false, scaleLabel: false, ticks: {display: false, suggestedMax: max + 1}}],
//        }
//    };
//}
//
//function createSimpleChart($el, data, chartOptions) {
//    new Chart($el[0], {
//        type   : 'line',
//        data   : {
//            labels  : ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
//            datasets: [{
//                data           : data,
//                backgroundColor: $el.data('fill'),
//                borderColor    : $el.data('stroke'),
//                borderWidth    : 1.5,
//            }]
//        },
//        options: chartOptions
//    });
//}
//
//let $simpleChart = $('.js-simple-chart');
//
//$simpleChart.each(function () {
//    createSimpleChart($(this), $(this).data('data').split(','), simpleChartOptions(Math.max(...$(this).data('data').split(','))))
//});
//
//var bouData              = {
//    // Generate the days labels on the X axis.
//    labels  : Array.from(new Array(30), function (_, i) {
//        return i === 0 ? 1 : i;
//    }),
//    datasets: [{
//        label                    : 'Current Month',
//        fill                     : 'start',
//        data                     : [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
//        backgroundColor          : 'rgba(0,123,255,0.1)',
//        borderColor              : 'rgba(0,123,255,1)',
//        pointBackgroundColor     : '#ffffff',
//        pointHoverBackgroundColor: 'rgb(0,123,255)',
//        borderWidth              : 1.5,
//        pointRadius              : 0,
//        pointHoverRadius         : 3
//    }, {
//        label                    : 'Past Month',
//        fill                     : 'start',
//        data                     : [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
//        backgroundColor          : 'rgba(255,65,105,0.1)',
//        borderColor              : 'rgba(255,65,105,1)',
//        pointBackgroundColor     : '#ffffff',
//        pointHoverBackgroundColor: 'rgba(255,65,105,1)',
//        borderDash               : [3, 3],
//        borderWidth              : 1,
//        pointRadius              : 0,
//        pointHoverRadius         : 2,
//        pointBorderColor         : 'rgba(255,65,105,1)'
//    }]
//};
//// Options
//var bouOptions           = {
//    responsive: true,
//    legend    : {
//        position: 'top'
//    },
//    elements  : {
//        line : {
//            // A higher value makes the line look skewed at this ratio.
//            tension: 0.3
//        },
//        point: {
//            radius: 0
//        }
//    },
//    scales    : {
//        xAxes: [{
//            gridLines: false,
//            ticks    : {
//                callback: function (tick, index) {
//                    // Jump every 7 values on the X axis labels to avoid clutter.
//                    return index % 7 !== 0 ? '' : tick;
//                }
//            }
//        }],
//        yAxes: [{
//            ticks: {
//                suggestedMax: 45,
//                callback    : function (tick, index, ticks) {
//                    if (tick === 0) {
//                        return tick;
//                    }
//                    // Format the amounts using Ks for thousands.
//                    return tick > 999 ? (tick / 1000).toFixed(1) + 'K' : tick;
//                }
//            }
//        }]
//    },
//    // Uncomment the next lines in order to disable the animations.
//    // animation: {
//    //   duration: 0
//    // },
//    hover     : {
//        mode     : 'nearest',
//        intersect: false
//    },
//    tooltips  : {
//        custom   : false,
//        mode     : 'nearest',
//        intersect: false
//    }
//};
//window.BlogOverviewUsers = new Chart($('.js-chart')[0], {
//    type   : 'LineWithLine',
//    data   : bouData,
//    options: bouOptions
//});
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xuLy9cbi8vQ2hhcnQuZGVmYXVsdHMuTGluZVdpdGhMaW5lID0gQ2hhcnQuZGVmYXVsdHMubGluZTtcbi8vQ2hhcnQuY29udHJvbGxlcnMuTGluZVdpdGhMaW5lID0gQ2hhcnQuY29udHJvbGxlcnMubGluZS5leHRlbmQoe1xuLy8gICAgZHJhdzogZnVuY3Rpb24gZHJhdyhlYXNlKSB7XG4vLyAgICAgICAgQ2hhcnQuY29udHJvbGxlcnMubGluZS5wcm90b3R5cGUuZHJhdy5jYWxsKHRoaXMsIGVhc2UpO1xuLy8gICAgICAgIGlmICh0aGlzLmNoYXJ0LnRvb2x0aXAuX2FjdGl2ZSAmJiB0aGlzLmNoYXJ0LnRvb2x0aXAuX2FjdGl2ZS5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgdmFyIGFjdGl2ZVBvaW50ID0gdGhpcy5jaGFydC50b29sdGlwLl9hY3RpdmVbMF0sXG4vLyAgICAgICAgICAgICAgICBjdHggPSB0aGlzLmNoYXJ0LmN0eCxcbi8vICAgICAgICAgICAgICAgIHggPSBhY3RpdmVQb2ludC50b29sdGlwUG9zaXRpb24oKS54LFxuLy8gICAgICAgICAgICAgICAgdG9wWSA9IHRoaXMuY2hhcnQuc2NhbGVzWyd5LWF4aXMtMCddLnRvcCxcbi8vICAgICAgICAgICAgICAgIGJvdHRvbVkgPSB0aGlzLmNoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS5ib3R0b207XG4vL1xuLy8gICAgICAgICAgICAvLyBEcmF3IHRoZSBsaW5lXG4vLyAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4vLyAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgICAgICAgICAgY3R4Lm1vdmVUbyh4LCB0b3BZKTtcbi8vICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCBib3R0b21ZKTtcbi8vICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbi8vICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNkZGQnO1xuLy8gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy99KTtcbi8vXG4vL2Z1bmN0aW9uIHNpbXBsZUNoYXJ0T3B0aW9ucyhtYXgpIHtcbi8vICAgIHJldHVybiB7XG4vLyAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbi8vICAgICAgICByZXNwb25zaXZlICAgICAgICAgOiB0cnVlLFxuLy8gICAgICAgIGxlZ2VuZCAgICAgICAgICAgICA6IHtkaXNwbGF5OiBmYWxzZX0sXG4vLyAgICAgICAgdG9vbHRpcHMgICAgICAgICAgIDoge2VuYWJsZWQ6IGZhbHNlLCBjdXN0b206IGZhbHNlfSxcbi8vICAgICAgICBlbGVtZW50cyAgICAgICAgICAgOiB7cG9pbnQ6IHtyYWRpdXM6IDB9LCBsaW5lOiB7dGVuc2lvbjogMC4zfX0sXG4vLyAgICAgICAgc2NhbGVzICAgICAgICAgICAgIDoge1xuLy8gICAgICAgICAgICB4QXhlczogW3tncmlkTGluZXM6IGZhbHNlLCBzY2FsZUxhYmVsOiBmYWxzZSwgdGlja3M6IHtkaXNwbGF5OiBmYWxzZX19XSxcbi8vICAgICAgICAgICAgeUF4ZXM6IFt7Z3JpZExpbmVzOiBmYWxzZSwgc2NhbGVMYWJlbDogZmFsc2UsIHRpY2tzOiB7ZGlzcGxheTogZmFsc2UsIHN1Z2dlc3RlZE1heDogbWF4ICsgMX19XSxcbi8vICAgICAgICB9XG4vLyAgICB9O1xuLy99XG4vL1xuLy9mdW5jdGlvbiBjcmVhdGVTaW1wbGVDaGFydCgkZWwsIGRhdGEsIGNoYXJ0T3B0aW9ucykge1xuLy8gICAgbmV3IENoYXJ0KCRlbFswXSwge1xuLy8gICAgICAgIHR5cGUgICA6ICdsaW5lJyxcbi8vICAgICAgICBkYXRhICAgOiB7XG4vLyAgICAgICAgICAgIGxhYmVscyAgOiBbXCJMYWJlbCAxXCIsIFwiTGFiZWwgMlwiLCBcIkxhYmVsIDNcIiwgXCJMYWJlbCA0XCIsIFwiTGFiZWwgNVwiLCBcIkxhYmVsIDZcIiwgXCJMYWJlbCA3XCJdLFxuLy8gICAgICAgICAgICBkYXRhc2V0czogW3tcbi8vICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgIDogZGF0YSxcbi8vICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJGVsLmRhdGEoJ2ZpbGwnKSxcbi8vICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yICAgIDogJGVsLmRhdGEoJ3N0cm9rZScpLFxuLy8gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGggICAgOiAxLjUsXG4vLyAgICAgICAgICAgIH1dXG4vLyAgICAgICAgfSxcbi8vICAgICAgICBvcHRpb25zOiBjaGFydE9wdGlvbnNcbi8vICAgIH0pO1xuLy99XG4vL1xuLy9sZXQgJHNpbXBsZUNoYXJ0ID0gJCgnLmpzLXNpbXBsZS1jaGFydCcpO1xuLy9cbi8vJHNpbXBsZUNoYXJ0LmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgY3JlYXRlU2ltcGxlQ2hhcnQoJCh0aGlzKSwgJCh0aGlzKS5kYXRhKCdkYXRhJykuc3BsaXQoJywnKSwgc2ltcGxlQ2hhcnRPcHRpb25zKE1hdGgubWF4KC4uLiQodGhpcykuZGF0YSgnZGF0YScpLnNwbGl0KCcsJykpKSlcbi8vfSk7XG4vL1xuLy92YXIgYm91RGF0YSAgICAgICAgICAgICAgPSB7XG4vLyAgICAvLyBHZW5lcmF0ZSB0aGUgZGF5cyBsYWJlbHMgb24gdGhlIFggYXhpcy5cbi8vICAgIGxhYmVscyAgOiBBcnJheS5mcm9tKG5ldyBBcnJheSgzMCksIGZ1bmN0aW9uIChfLCBpKSB7XG4vLyAgICAgICAgcmV0dXJuIGkgPT09IDAgPyAxIDogaTtcbi8vICAgIH0pLFxuLy8gICAgZGF0YXNldHM6IFt7XG4vLyAgICAgICAgbGFiZWwgICAgICAgICAgICAgICAgICAgIDogJ0N1cnJlbnQgTW9udGgnLFxuLy8gICAgICAgIGZpbGwgICAgICAgICAgICAgICAgICAgICA6ICdzdGFydCcsXG4vLyAgICAgICAgZGF0YSAgICAgICAgICAgICAgICAgICAgIDogWzUwMCwgODAwLCAzMjAsIDE4MCwgMjQwLCAzMjAsIDIzMCwgNjUwLCA1OTAsIDEyMDAsIDc1MCwgOTQwLCAxNDIwLCAxMjAwLCA5NjAsIDE0NTAsIDE4MjAsIDI4MDAsIDIxMDIsIDE5MjAsIDM5MjAsIDMyMDIsIDMxNDAsIDI4MDAsIDMyMDAsIDMyMDAsIDM0MDAsIDI5MTAsIDMxMDAsIDQyNTBdLFxuLy8gICAgICAgIGJhY2tncm91bmRDb2xvciAgICAgICAgICA6ICdyZ2JhKDAsMTIzLDI1NSwwLjEpJyxcbi8vICAgICAgICBib3JkZXJDb2xvciAgICAgICAgICAgICAgOiAncmdiYSgwLDEyMywyNTUsMSknLFxuLy8gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yICAgICA6ICcjZmZmZmZmJyxcbi8vICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiKDAsMTIzLDI1NSknLFxuLy8gICAgICAgIGJvcmRlcldpZHRoICAgICAgICAgICAgICA6IDEuNSxcbi8vICAgICAgICBwb2ludFJhZGl1cyAgICAgICAgICAgICAgOiAwLFxuLy8gICAgICAgIHBvaW50SG92ZXJSYWRpdXMgICAgICAgICA6IDNcbi8vICAgIH0sIHtcbi8vICAgICAgICBsYWJlbCAgICAgICAgICAgICAgICAgICAgOiAnUGFzdCBNb250aCcsXG4vLyAgICAgICAgZmlsbCAgICAgICAgICAgICAgICAgICAgIDogJ3N0YXJ0Jyxcbi8vICAgICAgICBkYXRhICAgICAgICAgICAgICAgICAgICAgOiBbMzgwLCA0MzAsIDEyMCwgMjMwLCA0MTAsIDc0MCwgNDcyLCAyMTksIDM5MSwgMjI5LCA0MDAsIDIwMywgMzAxLCAzODAsIDI5MSwgNjIwLCA3MDAsIDMwMCwgNjMwLCA0MDIsIDMyMCwgMzgwLCAyODksIDQxMCwgMzAwLCA1MzAsIDYzMCwgNzIwLCA3ODAsIDEyMDBdLFxuLy8gICAgICAgIGJhY2tncm91bmRDb2xvciAgICAgICAgICA6ICdyZ2JhKDI1NSw2NSwxMDUsMC4xKScsXG4vLyAgICAgICAgYm9yZGVyQ29sb3IgICAgICAgICAgICAgIDogJ3JnYmEoMjU1LDY1LDEwNSwxKScsXG4vLyAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3IgICAgIDogJyNmZmZmZmYnLFxuLy8gICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw2NSwxMDUsMSknLFxuLy8gICAgICAgIGJvcmRlckRhc2ggICAgICAgICAgICAgICA6IFszLCAzXSxcbi8vICAgICAgICBib3JkZXJXaWR0aCAgICAgICAgICAgICAgOiAxLFxuLy8gICAgICAgIHBvaW50UmFkaXVzICAgICAgICAgICAgICA6IDAsXG4vLyAgICAgICAgcG9pbnRIb3ZlclJhZGl1cyAgICAgICAgIDogMixcbi8vICAgICAgICBwb2ludEJvcmRlckNvbG9yICAgICAgICAgOiAncmdiYSgyNTUsNjUsMTA1LDEpJ1xuLy8gICAgfV1cbi8vfTtcbi8vLy8gT3B0aW9uc1xuLy92YXIgYm91T3B0aW9ucyAgICAgICAgICAgPSB7XG4vLyAgICByZXNwb25zaXZlOiB0cnVlLFxuLy8gICAgbGVnZW5kICAgIDoge1xuLy8gICAgICAgIHBvc2l0aW9uOiAndG9wJ1xuLy8gICAgfSxcbi8vICAgIGVsZW1lbnRzICA6IHtcbi8vICAgICAgICBsaW5lIDoge1xuLy8gICAgICAgICAgICAvLyBBIGhpZ2hlciB2YWx1ZSBtYWtlcyB0aGUgbGluZSBsb29rIHNrZXdlZCBhdCB0aGlzIHJhdGlvLlxuLy8gICAgICAgICAgICB0ZW5zaW9uOiAwLjNcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHBvaW50OiB7XG4vLyAgICAgICAgICAgIHJhZGl1czogMFxuLy8gICAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBzY2FsZXMgICAgOiB7XG4vLyAgICAgICAgeEF4ZXM6IFt7XG4vLyAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXG4vLyAgICAgICAgICAgIHRpY2tzICAgIDoge1xuLy8gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh0aWNrLCBpbmRleCkge1xuLy8gICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgZXZlcnkgNyB2YWx1ZXMgb24gdGhlIFggYXhpcyBsYWJlbHMgdG8gYXZvaWQgY2x1dHRlci5cbi8vICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggJSA3ICE9PSAwID8gJycgOiB0aWNrO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfV0sXG4vLyAgICAgICAgeUF4ZXM6IFt7XG4vLyAgICAgICAgICAgIHRpY2tzOiB7XG4vLyAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IDQ1LFxuLy8gICAgICAgICAgICAgICAgY2FsbGJhY2sgICAgOiBmdW5jdGlvbiAodGljaywgaW5kZXgsIHRpY2tzKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHRpY2sgPT09IDApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpY2s7XG4vLyAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0aGUgYW1vdW50cyB1c2luZyBLcyBmb3IgdGhvdXNhbmRzLlxuLy8gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aWNrID4gOTk5ID8gKHRpY2sgLyAxMDAwKS50b0ZpeGVkKDEpICsgJ0snIDogdGljaztcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH1dXG4vLyAgICB9LFxuLy8gICAgLy8gVW5jb21tZW50IHRoZSBuZXh0IGxpbmVzIGluIG9yZGVyIHRvIGRpc2FibGUgdGhlIGFuaW1hdGlvbnMuXG4vLyAgICAvLyBhbmltYXRpb246IHtcbi8vICAgIC8vICAgZHVyYXRpb246IDBcbi8vICAgIC8vIH0sXG4vLyAgICBob3ZlciAgICAgOiB7XG4vLyAgICAgICAgbW9kZSAgICAgOiAnbmVhcmVzdCcsXG4vLyAgICAgICAgaW50ZXJzZWN0OiBmYWxzZVxuLy8gICAgfSxcbi8vICAgIHRvb2x0aXBzICA6IHtcbi8vICAgICAgICBjdXN0b20gICA6IGZhbHNlLFxuLy8gICAgICAgIG1vZGUgICAgIDogJ25lYXJlc3QnLFxuLy8gICAgICAgIGludGVyc2VjdDogZmFsc2Vcbi8vICAgIH1cbi8vfTtcbi8vd2luZG93LkJsb2dPdmVydmlld1VzZXJzID0gbmV3IENoYXJ0KCQoJy5qcy1jaGFydCcpWzBdLCB7XG4vLyAgICB0eXBlICAgOiAnTGluZVdpdGhMaW5lJyxcbi8vICAgIGRhdGEgICA6IGJvdURhdGEsXG4vLyAgICBvcHRpb25zOiBib3VPcHRpb25zXG4vL30pOyJdfQ==
