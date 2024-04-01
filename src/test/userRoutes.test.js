const request = require("supertest");
const app = require("../../app.ts");

describe("Testando os endpoints do usuário", () => {
  let userId;

  it("Deve criar um novo usuário", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Teste", email: "teste@example.com", password: "123456" });

    userId = res.body.user._id;
    expect(res.statusCode).toEqual(201);
  });

  it("Deve listar todos os usuários", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBeTruthy();
    expect(Array.isArray(res.body.users)).toBeTruthy();
  });

  it("Deve obter um usuário pelo ID", async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.user).toBeDefined();
  });

  it("Deve atualizar um usuário pelo ID", async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({ name: "Novo Nome" });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.user.name).toEqual("Novo Nome");
  });

  it("Deve excluir um usuário pelo ID", async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBeTruthy();
    expect(res.body.message).toEqual("Usuário excluído com sucesso");
  });
});
