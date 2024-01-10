import SvgIcon from './SvgIcon/index.vue';

const allGloblComponent = { SvgIcon };


export default {
    install(app) {
        Object.keys(allGloblComponent).forEach(key => {
            app.component(key, allGloblComponent[key])
        });
    }
}