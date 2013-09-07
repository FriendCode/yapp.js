define([
    "hr/hr",

    "text!resources/code/build/structure.txt",
    "text!resources/code/build/build.js",
    "text!resources/code/build/options.js",
    "text!resources/code/build/module.js",
    "text!resources/code/build/revision.js",
    "text!resources/code/build/options_args.js",
    "text!resources/code/build/args.js",
    "text!resources/code/application/extend.js",
    "text!resources/code/application/run.js",
    "text!resources/code/application/title.js",
    "text!resources/code/application/head.js",
    "text!resources/code/view/extend.js",
    "text!resources/code/view/render.js",
    "text!resources/code/view/render_extend.js",
    "text!resources/code/view/template.js",
    "text!resources/code/view/component.js",
    "text!resources/code/view/events.js",
    "text!resources/code/view/template_function.js",
    "text!resources/code/template/syntax.html",
    "text!resources/code/template/components.html",
    "text!resources/code/template/components.js",
    "text!resources/code/template/load.js",
    "text!resources/code/class/extend.js",
    "text!resources/code/class/initialize.js",
    "text!resources/code/class/defaults.js",
    "text!resources/code/class/on.js",
    "text!resources/code/class/on_all.js",
    "text!resources/code/class/on_map.js",
    "text!resources/code/class/on_sub.js",
    "text!resources/code/class/off.js",
    "text!resources/code/model/extend.js",
    "text!resources/code/model/set.js",
    "text!resources/code/model/tojson.js",
    "text!resources/code/collection/model.js",
    "text!resources/code/collection/model_polymorphic.js",
    "text!resources/code/collection/tojson.js",
    "text!resources/code/requests/class.js",
    "text!resources/code/requests/get.js",
    "text!resources/code/requests/getjson.js",
    "text!resources/code/requests/post.js",
    "text!resources/code/logger/namespace.js",
    "text!resources/code/logger/logging.js",
    "text!resources/code/router/extend.js",
    "text!resources/code/router/route.js",
    "text!resources/code/urls/base.js",
    "text!resources/code/urls/static.js",
    "text!resources/code/urls/route.js",
    "text!resources/code/urls/rules.js",
    "text!resources/code/urls/template.html",
    "text!resources/code/i18n/load.js",
    "text!resources/code/i18n/template.html",
    "text!resources/code/i18n/en.json",
    "text!resources/code/cache/key.js",
    "text!resources/code/cache/namespace.js",
    "text!resources/code/resources/load.js",
    "text!resources/code/resources/namespace.js",
    "text!resources/code/resources/loader.js",
], function(hr) {

    hr.Resources.addNamespace("templates", {
        loader: "http",
        base: "templates"
    });

     hr.Resources.addNamespace("codes", {
        loader: "require",
        base: "resources/code",
        mode: "text"
    });
    return {}
});