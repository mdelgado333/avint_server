import { Schema, model } from 'mongoose';

const scriptSchema = new Schema(
  {
    niche: { type: String, required: true, index: true },
    subniche: { type: String, required: true, index: true },

    typeOfContent: {
      isHumouristic: { type: Boolean, default: false },
      isInspirational: { type: Boolean, default: false },
      isEducational: { type: Boolean, default: false },
      isDocumentational: { type: Boolean, default: false },
      isSeries: { type: Boolean, default: false }
    },

    typeOfValue: {
      solvesAProblem: { type: Boolean, default: false },
      improvesLikelihoodOfAchievement: { type: Boolean, default: false },
      takesLessTime: { type: Boolean, default: false },
      takesLessEffort: { type: Boolean, default: false }
    },

    intro: {
      hasHook: { type: Boolean, default: false },
      script: { type: String, default: '' }
    },

    content: {
        type: String,
        enum: [
            "X-Step Process",
            "Problem-Action-Solution",
            "Before-After-Bridge",
            "Hero Journey",
            "Listicle",
            "Case Study",
            "Storytelling",
            "Comparison",
            "Challenge-Based",
            "Other"
        ],
        required: true },


    outro : {
      hasCTA: { type: Boolean, default: false },
      script: { type: String, default: '' }
    },
    duration: { 
        type: Number,
        default: 0 
      }
  },
  { timestamps: true }
);

export const Script = model('Script', scriptSchema);

