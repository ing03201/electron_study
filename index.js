var http = require('http');
var querystring = require('querystring');
var EventEmitter = require('events');

var server = http.createServer(function(request,response){
  // 1. post로 전달된 데이터를 담을 변수를 선언
  console.log(request.url);
  var parsedUrl = url.parse(request.url);
  // 2. parsing 된 url 중에 서버URI에 해당하는 pathname 만 따로 저장
  var resource = parsedUrl.pathname;
  console.log('resource path=%s',resource);

  // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
  if(resource == '/getMacAddress?'){
    request.on('data', function (data) {
      // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
      console.log('data =%s',data);
    });
  }else{
    request.on('data', function (data) {
      // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
      console.log('data =%s',data);
    });
  }


});

server.listen(8080, function(){
    console.log('Server is running...');
});


const {app, BrowserWindow} = require('electron')

  const path = require('path')
  const url = require('url')
  
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  
    // Open the DevTools.
    win.webContents.openDevTools()
  
    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
  }
  
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)
  
  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })
