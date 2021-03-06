// var Chartist = require("chartist");
import  Chartist, { IBarChartOptions} from "chartist";

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data: { type: string; element: { animate: (arg0: { d?: { begin: number; dur: number; from: any; to: any; easing: any; }; opacity?: { begin: number; dur: number; from: number; to: number; easing: string; }; }) => void; }; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; index: number; }) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

let emailOptions:IBarChartOptions;
emailOptions ={
  axisX: {
    showGrid: false
  },
  low: 0,
  high: 1000,
  chartPadding: {
    top: 15,
    right: 5,
    bottom: 0,
    left: 0
  }
}

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options:emailOptions,
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value: any[]) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data: { type: string; element: { animate: (arg0: { opacity: { begin: number; dur: number; from: number; to: number; easing: string; }; }) => void; }; index: number; }) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data: { type: string; element: { animate: (arg0: { d?: { begin: number; dur: number; from: any; to: any; easing: any; }; opacity?: { begin: number; dur: number; from: number; to: number; easing: string; }; }) => void; }; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; index: number; }) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

export  {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
};