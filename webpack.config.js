const webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,//vairable name in node js to indicate the directory in which the file is
    filename:'./public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Home: 'app/components/Home.jsx',
      Welcome: 'app/components/Welcome.jsx',
      Appointment: 'app/components/Appointment.jsx',
      View: 'app/components/View.jsx',
      ViewDetail: 'app/components/ViewDetail.jsx',
      GetDoctorList: 'app/api/GetDoctorList.jsx',
      GetPatientList: 'app/api/GetPatientList.jsx',
      MakeAppointment: 'app/api/MakeAppointment.jsx',
      GetTimeSlotList: 'app/api/GetTimeSlotList.jsx',
      GetDoctorsAppointment: 'app/api/GetDoctorsAppointment.jsx',
      DeleteAppointment: 'app/api/DeleteAppointment.jsx'
    },
    extensions: ['', '.js', '.jsx', '.css', '.ttf', '.eot', '.woff2', '.woff', '.svg']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    })
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/
      },
      {
                test: /\.css$/,
                loader:'style-loader!css-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
