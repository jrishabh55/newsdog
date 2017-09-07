// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBKmdWxSDc9YHs_DIp44bZOJ4AzpXT_T0w',
    authDomain: 'newsdog-1f22d.firebaseapp.com',
    databaseURL: 'https://newsdog-1f22d.firebaseio.com',
    projectId: 'newsdog-1f22d',
    storageBucket: 'gs://newsdog-1f22d.appspot.com',
    messagingSenderId: '243452281650'
  }
};
