import express from 'express'
import { Script } from '../models/Script.model';

interface ScriptBody {
    niche: string;
    subniche: string;
    contentStructure: string;
    duration: number;
  }

export const createScript = async (req: express.Request<{}, {}, ScriptBody>, res: express.Response) => {
    try {
      const { niche, subniche, contentStructure, duration } = req.body;
  
      const script = new Script({ niche, subniche, contentStructure, duration });
      // await script.generateScriptWithDuration();
  
      res.status(200).json(script); // Respond with the script
    } catch (error) {
      res.status(500).json({ message: 'Error creating script', error });
    }
  };

export const getScript = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params; // Extract the id from URL parameters
        const script = await Script.findById(id);
        if (!script) {
          return res.status(404).json({ message: 'Script not found' });
        }
    
        res.status(200).json(script); // Send the script back in the response
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving script', error });
      }
};
