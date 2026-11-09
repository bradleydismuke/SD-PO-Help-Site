// Listed in order of precedence (highest first).
// Verify against the current NSDA Student Congress rules.
export const MOTIONS = [
  { name: 'Fix time to which to adjourn / Adjourn', second: 'Yes', debate: 'No', vote: 'Majority', notes: 'Ends the session. Privileged; not debatable.' },
  { name: 'Recess', second: 'Yes', debate: 'No (time may be amended)', vote: 'Majority', notes: 'Short break; state its length.' },
  { name: 'Question of privilege / Personal privilege', second: 'No', debate: 'No', vote: 'Chair rules', notes: "Comfort or rights issues (can't hear, temperature). May interrupt a speaker." },
  { name: 'Call for orders of the day', second: 'No', debate: 'No', vote: 'None (chair enforces)', notes: 'Demands the chamber return to the schedule.' },
  { name: 'Point of order', second: 'No', debate: 'No', vote: 'Chair rules', notes: "May interrupt. Chair rules 'well taken' or 'not well taken'." },
  { name: 'Appeal the decision of the chair', second: 'Yes', debate: 'Limited', vote: 'Majority (tie sustains chair)', notes: 'Challenges a ruling; PO states reason, member states objection.' },
  { name: 'Parliamentary inquiry', second: 'No', debate: 'No', vote: 'Chair answers', notes: 'Asks the chair about procedure. Not for debate on content.' },
  { name: 'Division of the house', second: 'No', debate: 'No', vote: 'None (demand)', notes: 'Re-vote by standing or hands when a voice vote is unclear.' },
  { name: 'Lay on the table', second: 'Yes', debate: 'No', vote: 'Majority', notes: 'Sets aside the pending item temporarily.' },
  { name: 'Previous question (end debate)', second: 'Yes', debate: 'No', vote: 'Two-thirds', notes: "Stops debate and moves to a vote. Check tournament rules on required speeches first." },
  { name: 'Limit or extend debate', second: 'Yes', debate: 'No', vote: 'Two-thirds', notes: 'Change speech length or number of speeches.' },
  { name: 'Postpone to a certain time', second: 'Yes', debate: 'Yes', vote: 'Majority', notes: 'Delays action to a stated time.' },
  { name: 'Refer to committee', second: 'Yes', debate: 'Yes', vote: 'Majority', notes: 'Sends item to committee.' },
  { name: 'Amend', second: 'Yes', debate: 'Yes', vote: 'Majority', notes: 'Changes wording of pending legislation (germane only).' },
  { name: 'Main motion (legislation)', second: 'Yes', debate: 'Yes', vote: 'Majority (unless special rules)', notes: 'Adopt the bill or resolution.' },
  { name: 'Suspend the rules', second: 'Yes', debate: 'No', vote: 'Two-thirds', notes: 'Temporary departure from a chamber rule.' },
  { name: 'Reconsider', second: 'Yes', debate: 'Yes', vote: 'Majority', notes: 'Mover must have voted on the winning side. Rare.' },
  { name: 'Rescind / amend something previously adopted', second: 'Yes', debate: 'Yes', vote: 'Majority with notice, else two-thirds', notes: 'Cancels an earlier action.' },
];
