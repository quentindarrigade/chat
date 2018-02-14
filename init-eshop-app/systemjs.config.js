(function (global) {
    System.config({
        paths: {
            //'npm' pointera vers 'node_modules'
            'npm:': 'node_modules/'
        },

        //L'option map indique à SystemJS l'emplacement des éléments
        map: {
            //L'application sera compilée dans le répertoire 'dist'
            app: 'dist',

            //Les packages Angular
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            //Les autres librairies
            'rxjs': 'npm:rxjs'
        },

        //L'option 'packages' indique à SystemJS comment charger les packages qui n'ont pas de fichiers et/ou d'extensions renseignés
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },

            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
