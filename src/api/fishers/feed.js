/**
 * Handles feeding a pet fish and updating stats
 * 
 * @param {Object} req - Request with userId
 * @param {Object} res - Response object
 */
exports.handler = async (req, res) => {
  try {
    const {
      userId
    } = req.params;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }
    // In a real implementation, this would:
    // 1. Check if user has AquaBites
    // 2. Update pet fish stats in Firestore
    // 3. Handle level-ups and insurance changes
    // Mock data
    const mockPetFish = {
      name: 'Goldie',
      level: 3,
      xp: 50,
      health: 90,
      stage: 'Juvenile',
      lastFed: new Date().toISOString(),
      isResting: false
    };
    const xpGained = 10;
    const healthGained = 10;
    const aquaBitesRemaining = 19;
    // Check for level up
    let leveledUp = false;
    let newLevel = mockPetFish.level;
    let newXp = mockPetFish.xp + xpGained;
    if (newXp >= mockPetFish.level * 100) {
      leveledUp = true;
      newLevel = mockPetFish.level + 1;
      newXp = newXp - mockPetFish.level * 100;
    }
    // Determine stage based on level
    let newStage = mockPetFish.stage;
    if (newLevel >= 15) {
      newStage = 'Legendary';
    } else if (newLevel >= 10) {
      newStage = 'Adult';
    } else if (newLevel >= 5) {
      newStage = 'Juvenile';
    } else {
      newStage = 'Baby';
    }
    // Updated pet fish
    const updatedPetFish = {
      ...mockPetFish,
      level: newLevel,
      xp: newXp,
      health: Math.min(100, mockPetFish.health + healthGained),
      stage: newStage,
      lastFed: new Date().toISOString()
    };
    // In a real implementation, save to Firestore
    // await admin.firestore().collection('users').doc(userId).collection('pet_fish').doc('current').update(updatedPetFish);
    // await admin.firestore().collection('users').doc(userId).update({
    //   aquaBites: admin.firestore.FieldValue.increment(-1)
    // });
    // Log feeding activity
    // await admin.firestore().collection('users').doc(userId).collection('feeding_logs').add({
    //   timestamp: admin.firestore.FieldValue.serverTimestamp(),
    //   xpGained,
    //   healthGained,
    //   leveledUp,
    //   newLevel: leveledUp ? newLevel : undefined
    // });
    return res.status(200).json({
      success: true,
      petFish: updatedPetFish,
      aquaBitesRemaining,
      xpGained,
      healthGained,
      leveledUp,
      insuranceCoverage: newLevel * 10000
    });
  } catch (error) {
    console.error('Error feeding pet fish:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to feed pet fish',
      error: error.message
    });
  }
};