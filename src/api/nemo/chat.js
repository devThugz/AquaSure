/**
 * Handles chat interactions with Nemo AI assistant
 * 
 * @param {Object} req - Request object with message, userId, and context
 * @param {Object} res - Response object
 */
exports.handler = async (req, res) => {
  try {
    const {
      message,
      userId,
      context
    } = req.body;
    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }
    // In a real implementation, this would:
    // 1. Call OpenAI or another LLM API with proper context
    // 2. Store conversation history in Firestore
    // 3. Enrich with relevant fishing data
    // For demo purposes, use rule-based responses
    let response = '';
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('fish') && lowerMessage.includes('today')) {
      response = "Based on today's conditions and your location, I recommend targeting Yellowfin Tuna. They've been spotted 15-20km offshore with high catch rates. The water temperature is optimal at 26°C. Would you like specific coordinates?";
    } else if (lowerMessage.includes('weather')) {
      response = "Today's forecast: Partly cloudy with light winds (5-10 knots) from the southeast. Wave height 0.5-1m. Visibility excellent at 15km+. No storms expected in the next 24 hours. Safe conditions for fishing.";
    } else if (lowerMessage.includes('market') || lowerMessage.includes('price')) {
      response = "Latest market prices: Yellowfin Tuna ₱280-320/kg (↑5%), Mackerel ₱140-160/kg (↓3%), Blue Marlin ₱350-400/kg (stable), Milkfish ₱180-200/kg (↑2%). Demand is highest for tuna and blue marlin this week.";
    } else if (lowerMessage.includes('spot') || lowerMessage.includes('location')) {
      response = "Top fishing spots near you: 1) Coral Reef Point (3.5km east) - good for reef fish, 2) Deep Blue Drop (12km southeast) - tuna reported yesterday, 3) Sandy Banks (7km southwest) - mackerel schooling. I can mark these on your map if you'd like.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = "Hello! I'm Nemo, your fishing assistant. How can I help you today? You can ask me about fish recommendations, weather conditions, market prices, or good fishing spots.";
    } else if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage')) {
      response = "Your current insurance coverage is based on your pet fish level. Feed your fish daily to level up and increase your coverage! Each level adds ₱10,000 to your total coverage amount.";
    } else if (lowerMessage.includes('technique') || lowerMessage.includes('how to catch')) {
      response = "For yellowfin tuna, I recommend trolling with medium-sized lures at 6-9 knots. The best time is early morning or late afternoon when they come closer to the surface. Use 30-50lb test line for the best results.";
    } else {
      response = "I'm not sure I understand. You can ask me about today's fish recommendations, weather forecast, market prices, or good fishing spots near you.";
    }
    // In a real implementation, store the conversation in Firestore
    // await admin.firestore().collection('users').doc(userId).collection('nemo_chat').add({
    //   message,
    //   response,
    //   timestamp: admin.firestore.FieldValue.serverTimestamp()
    // });
    return res.status(200).json({
      success: true,
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing chat message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process chat message',
      error: error.message
    });
  }
};