var app = angular.module('app', ['ui.router','employeeIndexModule','employeeHeaderModule', 'employeeMenuModule','employeeSidebarModule','employeeSigninModule','employeeTasksModule','employeeTaskdetailModule']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
var states = [
    {
    name: 'index',
    url: '/',
    component: 'employeeIndexComponent'
    },
    {
        name: 'signin',
        url: '/signin',
        component: 'employeeSigninComponent'
    },
    {
        name: 'tasks',
        url: '/tasks',
        component: 'employeeTasksComponent'
    },
    {
        name: 'tasksDetail',
        url: '/taskdetail',
        component: 'employeeTaskdetailComponent'
    },
];

$urlRouterProvider.otherwise('/');

states.forEach(state => $stateProvider.state(state));

});