import { Router, Request, Response, RequestHandler } from "express";
import { supabase } from "../supabase";

const router = Router();

interface Facture {
    id_facture?: string;
    ref_facture: string;
    id_client: number;
    date_facturation: string;
    date_echeance: string;
    total_ht: number;
    total_ttc: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Facture:
 *       type: object
 *       required:
 *         - ref_facture
 *         - id_client
 *         - date_facturation
 *         - date_echeance
 *         - total_ht
 *         - total_ttc
 *       properties:
 *         id_facture:
 *           type: string
 *           format: uuid
 *         ref_facture:
 *           type: string
 *         id_client:
 *           type: integer
 *         date_facturation:
 *           type: string
 *           format: date
 *         date_echeance:
 *           type: string
 *           format: date
 *         total_ht:
 *           type: number
 *         total_ttc:
 *           type: number
 */

/**
 * @swagger
 * /factures:
 *   post:
 *     summary: Créer une nouvelle facture
 *     tags: [Factures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Facture'
 *     responses:
 *       201:
 *         description: Facture créée avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur interne du serveur
 */
const createFacture: RequestHandler = async (req, res) => {
    try {
        const facture: Omit<Facture, "id_facture"> = req.body;

        if (!facture.ref_facture || !facture.id_client || !facture.date_facturation ||
            !facture.date_echeance || isNaN(facture.total_ht) || isNaN(facture.total_ttc)) {
            res.status(400).json({ error: "Tous les champs sont requis." });
            return;
        }

        const { data, error } = await supabase
            .from("factures")
            .insert([facture])
            .select()
            .single();

        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

/**
 * @swagger
 * /factures:
 *   get:
 *     summary: Récupérer toutes les factures
 *     tags: [Factures]
 *     responses:
 *       200:
 *         description: Liste de toutes les factures
 *       500:
 *         description: Erreur interne du serveur
 */
const getAllFactures: RequestHandler = async (req, res) => {
    const { data, error } = await supabase.from("factures").select("*");

    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(data);
};

/**
 * @swagger
 * /factures/{id}:
 *   get:
 *     summary: Récupérer une facture par ID
 *     tags: [Factures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID de la facture
 *     responses:
 *       200:
 *         description: Détails de la facture
 *       404:
 *         description: Facture non trouvée
 */
const getFactureById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("factures")
        .select("*")
        .eq("id_facture", id)
        .single();

    if (error) {
        res.status(404).json({ error: "Facture non trouvée." });
        return;
    }
    res.json(data);
};

/**
 * @swagger
 * /factures/{id}:
 *   delete:
 *     summary: Supprimer une facture par ID
 *     tags: [Factures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID de la facture à supprimer
 *     responses:
 *       200:
 *         description: Facture supprimée avec succès
 *       404:
 *         description: Facture non trouvée
 */
const deleteFacture: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const { error } = await supabase.from("factures").delete().eq("id_facture", id);

    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json({ message: "Facture supprimée avec succès." });
};

router.post("/", createFacture);
router.get("/", getAllFactures);
router.get("/:id", getFactureById);
router.delete("/:id", deleteFacture);

export default router;
