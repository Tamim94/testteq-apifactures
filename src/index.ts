import express from "express";
import cors from "cors";
import "dotenv/config";
import facturesRoutes from "./routes/factures";
import { setupSwagger } from "./swagger";

const app = express();
app.use(cors());
app.use(express.json());

// swagger setup
setupSwagger(app);

//Routes
app.use("/factures", facturesRoutes); // ➜ Active les routes des factures

app.get("/", (req, res) => {
    res.send("API Factures Express.js + Supabase");
});

// Middleware global de gestion des erreurs
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Erreur inattendue:", err);
    res.status(500).json({ error: "Une erreur interne est survenue." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));
