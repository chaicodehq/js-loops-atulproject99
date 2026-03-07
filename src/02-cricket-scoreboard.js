/**
 * 🏏 Gully Cricket Scoreboard
 *
 * Mohalle ke bacche gully cricket khel rahe hain. Tu scorekeeper hai bhai!
 * Har ball ka outcome ek array mein diya gaya hai. Tujhe scoreboard banana hai.
 *
 * Ball outcomes:
 *   - 0 = dot ball (no run)
 *   - 1 to 6 = runs scored on that ball
 *   - -1 = WICKET! Batsman out ho gaya
 *
 * Rules:
 *   - Loop through each ball in the array using a for loop
 *   - Track: totalRuns, totalBalls (all balls including wickets),
 *     wickets, fours (ball === 4), sixes (ball === 6)
 *   - IMPORTANT: Agar 10 wickets ho gaye, toh STOP! (use break)
 *     Innings khatam. Remaining balls are not counted.
 *
 * Validation:
 *   - Agar balls ek array nahi hai ya empty array hai,
 *     return karo: { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 }
 *
 * @param {number[]} balls - Array of ball outcomes
 * @returns {{ totalRuns: number, totalBalls: number, wickets: number, fours: number, sixes: number }}
 *
 * @example
 *   cricketScoreboard([4, 0, 6, -1, 2, 1])
 *   // => { totalRuns: 13, totalBalls: 6, wickets: 1, fours: 1, sixes: 1 }
 *
 *   cricketScoreboard([])
 *   // => { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 }
 */
export function cricketScoreboard(balls) {
  // Your code here
  if (!Array.isArray(balls) || balls.length == 0) return { totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0 };
  const runOnBall = [];
  const wickets = [];
  const totalFour = [];
  const totalSix = [];
  const totalBalls = [];
  for (let i = 0; i < balls.length; i++) {
    let run = balls[i];
    if (run == -1) {
      /// Wickets
      wickets.push(run);
      totalBalls.push(i);
      if (wickets.length == 10) {
        break;
      }
    }
    else if (run == 0) {
      /// Zero run
      totalBalls.push(i);
    }
    else if (run == 4) {
      /// Four run 
      totalFour.push(run);
      totalBalls.push(i);
    } else if (run == 6) {
      /// Six run 
      totalSix.push(run); totalBalls.push(i);
    }
    else {
      runOnBall.push(run); totalBalls.push(i);
    }

  }
  const totalRun = runOnBall.reduce((acc, current) => acc + current, 0) + totalFour.length * 4 + totalSix.length * 6;
  return { totalRuns: totalRun, totalBalls: totalBalls.length, wickets: wickets.length, fours: totalFour.length, sixes: totalSix.length }
}
