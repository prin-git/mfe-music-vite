#  Microfrontend  App example (React-Vite) 

## Versions need the app to run without err
 * Node ^18.16.0 
 * react: ^18.2.0
 * vit": ^4.2.0
 * originjs/vite-plugin-federation: ^1.2.1
 * react-dom": ^18.2.0

This repo conatain 3 apps which togeher work as a  Microfrontend ;

* `list-remote` One Remote app sharing a store and two components hearder, musiclist.
*  `detail-remote` One Remote app  also acting as a host app to consuming the values from store. it act as a remote app to sharing a detail component.
*  `mfe-host-music` The main host app consuming components from both remote app nad store from list-remote.


# To see the MFE working in Local

 ## Open list-remote, and run the following command
* `npm i'
* 'npm run dev'  app will run in `port 5002`
#### following 2 steps need to do all the time if you need to see your changes in Host
* 'npm run build`(important to get it build and sereve to got access to the host ,  )
* `npm run serve`  app will serve in `port 5012` (to which the host looking in to )


 ## Open detail-remote, and run the following command
* `npm i'
* 'npm run dev'  app will run in `port 5001`
#### following 2 steps need to do all the time if you need to see your changes in Host
* 'npm run build`(important to get it build and sereve to got access to the host ,  )
* `npm run serve`  app will serve in `port 5011` (to which the host looking in to )


 ## Open mfe-host-music, and run the following command
* `npm i'
* 'npm run dev'  app will run in any available port
*  Now you can see the host app runing with all the compoents and state collected from other two apps

Note: Its important to set Serve port strict for remote app,
