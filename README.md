Oui, **Swagger génère une documentation interactive**, mais il ne remplace pas un bon **README** ! Un README est utile pour :
- Expliquer comment **installer et exécuter** l’API 🚀
- Détailler les **technos utilisées** 🛠️
- Indiquer comment **tester les routes avec Swagger** 📖
- Ajouter des **exemples de requêtes** 🔥

---

## **📌 Création d’un README (`README.md`)**
Voici un **README complet** que tu peux utiliser et modifier selon tes besoins :

### **📄 `README.md`**
```md
# 📄 API Factures - Express.js + Supabase

API de gestion des factures développée avec **TypeScript**, **Express.js** et **PostgreSQL via Supabase**.

## 🚀 Installation et exécution

1. **Cloner le projet**  
   ```sh
   git clone https://github.com/ton-repo/api-factures.git
   cd api-factures
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Configurer les variables d’environnement**  
   Crée un fichier `.env` et ajoute tes clés Supabase :
   ```env
   SUPABASE_URL=https://your-supabase-url.supabase.co
   SUPABASE_KEY=your-anon-key
   PORT=3000
   ```

4. **Démarrer le serveur**
   ```sh
 npm run dev 
ou  
 npx ts-node src/index.ts
   
   ```

## 📖 Documentation API (Swagger)
Une documentation interactive est disponible avec Swagger :

🔗 [Accéder à la documentation Swagger](http://localhost:3000/api-docs)

Lance le serveur et ouvre `http://localhost:3000/api-docs` dans ton navigateur.

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

---

## 📩 Contact
Si tu as des questions, n’hésite pas à me contacter via [LinkedIn](https://linkedin.com) ou à créer une issue sur le repo GitHub.

