# MFE App example (React-Vite) 

This repo conatain 3 apps which togeher work as a MFE;

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


 ## Open detailt-remote, and run the following command
* `npm i'
* 'npm run dev'  app will run in `port 5001`
#### following 2 steps need to do all the time if you need to see your changes in Host
* 'npm run build`(important to get it build and sereve to got access to the host ,  )
* `npm run serve`  app will serve in `port 5011` (to which the host looking in to )


 ## Open mfe-host-music, and run the following command
* `npm i'
* 'npm run dev'  app will run in any available port

Note: its important to set Serve port strict for remote app,
