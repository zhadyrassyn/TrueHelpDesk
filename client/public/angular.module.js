var app = angular.module('app', ['ui.router','employeeIndexModule','employeeHeaderModule', 'employeeMenuModule','employeeSidebarModule','employeeSigninModule','employeeTasksModule','employeeTaskdetailModule','userTasksModule','userSuccessModule','userReviewModule', 'ngCookies']);

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
        name: 'employeeTasks',
        url: '/employeetasks',
        component: 'employeeTasksComponent'
    },
    {
        name: 'employeeTaskDetail',
        url: '/employeetaskdetail',
        component: 'employeeTaskdetailComponent'
    },
    {
        name: 'userTasks',
        url: '/userTasks',
        component: 'userTasksComponent'
    },
    {
        name: 'userTaskDetail',
        url: '/userTaskdetail',
        component: 'userTaskdetailComponent'
    },
    {
        name: 'userSuccess',
        url: '/userSuccess',
        component: 'userSuccessComponent'
    },
    {
        name: 'userReview',
        url: '/userReview',
        component: 'userReviewComponent'
    },
];

$urlRouterProvider.otherwise('/');

states.forEach(state => $stateProvider.state(state));

});