export async function onRequest(context) {
    const tasl = await context.env.TODO_LIST.get("test");
    return new Response(task);
}