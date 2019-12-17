'use strict'
angular.module 'app', []

.directive 'countdown', ['Util', '$interval', (Util, $interval) ->
  restrict: 'A'
  scope:
    date: '@'
  link: (scope, element) ->    
    future = new Date scope.date
    $interval ->
      diff = Math.floor (future.getTime() - new Date().getTime()) / 1000
      element.text  Util.dhms diff
    , 1000
    return
]

.factory 'Util', [ ->
  {
    dhms: (t) ->
      days = Math.floor t / 86400
      t -= days * 86400
      hours = Math.floor(t / 3600) % 24
      t -= hours * 3600
      minutes = Math.floor(t / 60) % 60
      t -= minutes * 60
      seconds = t % 60
      [ days + 'd', hours + 'h', minutes + 'm', seconds + 's' ].join ' '
  }
]