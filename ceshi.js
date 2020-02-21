var api = window.location.hostname.indexOf('localhost') === 0 ? '47.110.41.112' : window.location.hostname; //
var port = window.location.hostname.indexOf('localhost') === 0 ? '' : window.location.port;
if(port) port = ":" + port;
var host = 'http://' + api;
var host1 = 'ws://' + api + ':8040';
var BaseUrl = host + ':8080';
var MenuUrl = host + port;
var MessageUrl = host + ':8020';
var wsUrl = host1;
var baseHost = api + port;
var uploadUrl = host + ':8060';
var uploadUrl1 = host + ':8066';
var fxypUrl = host + '/analyzestudy/index';
var systemUrl = host + '/login';
var medicalUrl = host + ':8099'
var photoUrl = host + ':8090';
var gtUrl = 'http://41.204.44.157:8081';
var apiTransmit = true; // 接口是否转发
