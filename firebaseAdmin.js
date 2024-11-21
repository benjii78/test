import { initializeApp, cert } from 'firebase-admin/app'

import serviceAccount from '' assert { type: 'json' }; // TODO

const app = initializeApp({
  credential: cert(serviceAccount),
  apiKey: "AIzaSyDs0O87CHQG5A87q3ZS3kaSjDJvBA8sM6g", // TODO
  authDomain: "esgi-2mcsi.firebaseapp.com", // TODO
  projectId: "esgi-2mcsi", // TODO

})

export default app
