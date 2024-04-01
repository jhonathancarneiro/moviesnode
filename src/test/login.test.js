Promise.all([
  import("supertest"),
  import("chai"),
  import("../../app"),
  import("chai-http"),
  import("../models/user"),
  import("bcrypt"),
]).then(([supertest, chai, app, chaiHttp, User, bcrypt]) => {
  chai.use(chaiHttp.default);
  const expect = chai.expect;
  const request = supertest.default;

  describe("Testando o login do usuário", () => {
    before(async () => {
      // Cria um usuário de teste antes de executar os testes
      const hashedPassword = await bcrypt.default.hash("password123", 10);
      await User.default.create({
        name: "Test User",
        email: "test@example.com",
        password: hashedPassword,
      });
    });

    it("Deve fazer login com sucesso com credenciais válidas", async () => {
      const res = await request(app.default).post("/api/login").send({
        email: "test@example.com",
        password: "password123",
      });
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("message", "Login bem-sucedido");
    });

    it("Deve falhar ao fazer login com credenciais inválidas", async () => {
      const res = await request(app.default).post("/api/login").send({
        email: "test@example.com",
        password: "wrongpassword",
      });
      expect(res).to.have.status(401);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("error", "Senha incorreta");
    });

    after(async () => {
      // Limpa o banco de dados após a execução dos testes
      await User.default.deleteMany({});
    });
  });
});
