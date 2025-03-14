


# 📄 API Factures - Express.js + Supabase

API de gestion des factures développée avec **TypeScript**, **Express.js** et **PostgreSQL via Supabase** pour le teste technique .
## Partie 1 du teste technique est dans le pdf testetechniquepartone-model.pdf , la Partie 2 facultative ci dessous avec le code et documentation.

## 🚀 Installation et exécution

1. **Cloner le projet**  
   ```sh
   git clone https://github.com/Tamim94/testteq-apifactures.git
   cd api-factures
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Configurer les variables d’environnement**   
  Le fichier env est dans le projet et definie les clés API du projet supabase (la base de donéées PostreSQL dedans)

4. **Démarrer le serveur**
   ```sh
   npm run dev 
   ```
ou
   ```sh
 npx ts-node src/index.ts
   ```


## 📖 Documentation API (Swagger)
Une documentation interactive est disponible avec Swagger pour l'API :

🔗 [Accéder à la documentation Swagger](http://localhost:3000/api-docs) btw le port sera peut etre different si vous avez deja le 3000 used , si vous avez une erreur de port  faite un netstat -ano | findstr :3000 et taskkill /PID PID /F.

Lancez le serveur et ouvrez `http://localhost:3000/api-docs` dans votre navigateur (Comme ci-dessous).
![image](https://github.com/user-attachments/assets/ba74e15f-1594-43ac-969c-cccda3e79e9b)


---

## 📌 Endpoints disponibles

### **1️⃣ Créer une facture**
```http
POST /factures
```
**Body JSON :**
```json
{
  "ref_facture": "2025-0001",
  "id_client": 1,
  "date_facturation": "2025-03-13",
  "date_echeance": "2025-03-20",
  "total_ht": 1000,
  "total_ttc": 1200
}
```
Like in this screenshot (201 means the request passed!) : 
![image](https://github.com/user-attachments/assets/125f8d24-3b6c-440f-960b-f8c12e26a4b8)

### **2️⃣ Récupérer toutes les factures**
```http
GET /factures
```

### **3️⃣ Récupérer une facture spécifique**
```http
GET /factures/{id_facture}
```

### **4️⃣ Supprimer une facture**
```http
DELETE /factures/{id_facture}
```

---

## ⚙️ Technologies utilisées
- **Node.js** avec **Express.js**
- **TypeScript**
- **PostgreSQL** via **Supabase**
- **Swagger** pour la documentation
- **dotenv** pour la gestion des variables d’environnement

---

## 📌 Améliorations possibles
- 🔐 Ajout de l’authentification avec JWT
- 📊 Statistiques sur les factures
- 📦 Ajout de la pagination pour `/factures`
- Ajouter la gestion des clients.
- Herbergé l'API sur une plateforme tel que GCP ( je pourrais faire avec un peu plus de temps ) 


---

## 📩 Contact
Si vous avez des questions n’hésitez pas à me contacter via Linkdein www.linkedin.com/in/tamim-golam , par mail golam.tamim94@gmail.com  ou à créer une issue sur le repo GitHub. 
## Mon Portflio avec tout les projets  : tamimg-portfolio.web.app


