import Vue from 'vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer)
Viewer.setDefaults({
  Options: {
    'initialViewIndex': 0,
    'inline': true,
    'button': true,
    'navbar': false,
    'title': true,
    'toolbar': true,
    'tooltip': true,
    'movable': true,
    'zoomable': true,
    'rotatable': true,
    'scalable': true,
    'transition': true,
    'fullscreen': true,
    'keyboard': true,
    'loading': true,
    'url': 'data-source' }
})
