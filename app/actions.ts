'use server';

import path from 'path';
import fs from 'fs/promises';

// Helper to get likes data path
function getDbPath() {
  return path.join(process.cwd(), 'data', 'likes.json');
}

// Read likes data
async function readLikesData() {
  try {
    const dbPath = getDbPath();
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Update like count for a topic
export async function updateTopicLike(topicId: number, newCount: number) {
  try {
    const likesData = await readLikesData();
    likesData[topicId] = newCount;
    
    const dbPath = getDbPath();
    await fs.mkdir(path.dirname(dbPath), { recursive: true });
    await fs.writeFile(dbPath, JSON.stringify(likesData, null, 2));
    
    return { success: true };
  } catch (error) {
    console.error('Error updating like:', error);
    return { success: false, error: 'Failed to update like' };
  }
}

// Get like count for a topic
export async function getTopicLikes(topicId: number) {
  try {
    const likesData = await readLikesData();
    return likesData[topicId] || 0;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return 0;
  }
}