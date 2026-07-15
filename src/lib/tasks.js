import { supabase } from "./supabaseClient.js";

const TABLE = "daily_tasks";

export async function fetchTasks() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []).map(rowToTask);
}

export async function createTask(task) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(taskToRow(task))
    .select()
    .single();

  if (error) throw error;
  return rowToTask(data);
}

export async function deleteTask(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

function rowToTask(row) {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    duration: row.duration,
    status: row.status,
    createdAt: row.created_at,
  };
}

function taskToRow(task) {
  return {
    title: task.title,
    subtitle: task.subtitle,
    duration: task.duration,
    status: task.status,
  };
}
