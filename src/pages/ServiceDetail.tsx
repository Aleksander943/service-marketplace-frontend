export default function ServiceDetail() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#f0eff0",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e5e5",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          serviços<span style={{ color: "#4f46e5" }}>já</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            style={{
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Publicar serviço
          </button>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#e5e5e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "#444",
            }}
          >
            A
          </div>
          <span style={{ fontSize: 14, color: "#333" }}>Aleksander</span>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e5e5",
          padding: "10px 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 13, color: "#999", cursor: "pointer" }}>
          ← Todos os serviços
        </span>
        <span style={{ fontSize: 13, color: "#ccc" }}>›</span>
        <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>
          Instalação de Piso Porcelanato e Vinilico
        </span>
      </div>

      {/* Page body */}
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "1.5rem 1rem",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "1.25rem",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Main card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "0.5px solid #e0e0e0",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: 280,
                background: "#b0b8c9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 13, color: "#fff", opacity: 0.7 }}>
                Sem imagem
              </span>
            </div>

            {/* Thumbnails */}
            <div
              style={{
                display: "flex",
                gap: 8,
                padding: "12px 16px",
                borderBottom: "0.5px solid #ebebeb",
              }}
            >
              {[true, false, false].map((active, i) => (
                <div
                  key={i}
                  style={{
                    width: 64,
                    height: 48,
                    borderRadius: 6,
                    background: "#cdd3df",
                    border: active
                      ? "2px solid #4f46e5"
                      : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#eeedfe",
                  color: "#3c3489",
                  padding: "3px 10px",
                  borderRadius: 4,
                  marginBottom: 12,
                  letterSpacing: "0.05em",
                }}
              >
                OUTROS
              </span>

              <h1
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#111",
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                Instalação de Piso Porcelanato e Vinilico
              </h1>

              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Realizo instalação profissional de pisos porcelanato, laminado e
                vinilico com acabamento de alta qualidade. Trabalho com
                materiais de primeira linha e garanto a satisfação total do
                cliente. Atendo toda a Zona Norte com horários flexíveis.
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: "1.25rem",
                }}
              >
                {[
                  "📍 Zona Norte",
                  "🕐 Disponível hoje",
                  "🏅 5 anos de experiência",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      color: "#555",
                      background: "#f5f5f5",
                      border: "0.5px solid #e0e0e0",
                      padding: "4px 12px",
                      borderRadius: 20,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <hr
                style={{
                  border: "none",
                  borderTop: "0.5px solid #ebebeb",
                  margin: "1.25rem 0",
                }}
              />

              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#999",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 10,
                }}
              >
                O que está incluído
              </p>

              {[
                { ok: true, text: "Nivelamento do piso" },
                { ok: true, text: "Assentamento dos pisos" },
                { ok: true, text: "Rejuntamento e acabamento" },
                { ok: false, text: "Materiais (cobrado à parte)" },
              ].map(({ ok, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                    fontSize: 14,
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      color: ok ? "#1d9e75" : "#d85a30",
                      fontWeight: 700,
                    }}
                  >
                    {ok ? "✓" : "✗"}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "0.5px solid #e0e0e0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "0.5px solid #ebebeb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>
                Avaliações
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#ba7517", fontSize: 14 }}>★★★★½</span>
                <span style={{ fontSize: 13, color: "#888" }}>
                  4.5 (12 avaliações)
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "0.5rem 1.5rem",
              }}
            >
              {[
                {
                  initials: "MR",
                  color: "#9fe1cb",
                  textColor: "#085041",
                  name: "Maria R.",
                  stars: 5,
                  time: "há 2 semanas",
                  text: "Serviço impecável! O Aleksander foi muito profissional e o acabamento ficou perfeito. Super recomendo.",
                },
                {
                  initials: "JP",
                  color: "#b5d4f4",
                  textColor: "#0c447c",
                  name: "João P.",
                  stars: 4,
                  time: "há 1 mês",
                  text: "Bom serviço, cumpriu o prazo. Apenas precisou voltar para ajustar um detalhe no rejunto, mas resolveu rápido.",
                },
              ].map(
                ({ initials, color, textColor, name, stars, time, text }) => (
                  <div
                    key={name}
                    style={{
                      padding: "1rem 0",
                      borderBottom: "0.5px solid #f0f0f0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <div
                        style={{
                          background: color,
                          color: textColor,
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {initials}
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#111",
                          }}
                        >
                          {name}
                        </p>
                        <span style={{ color: "#ba7517", fontSize: 12 }}>
                          {"★".repeat(stars)}
                          {"☆".repeat(5 - stars)}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: 12,
                          color: "#bbb",
                          marginLeft: "auto",
                        }}
                      >
                        {time}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                      {text}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Price + CTA */}
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "0.5px solid #e0e0e0",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingBottom: "1rem",
                borderBottom: "0.5px solid #ebebeb",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>
                A partir de
              </p>
              <p style={{ fontSize: 28, fontWeight: 600, color: "#111" }}>
                R$ 120{" "}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#888" }}>
                  / m²
                </span>
              </p>
            </div>
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                marginBottom: 8,
              }}
            >
              Solicitar orçamento
            </button>
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "transparent",
                color: "#333",
                border: "0.5px solid #ccc",
                borderRadius: 8,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              💬 Enviar mensagem
            </button>
          </div>

          {/* Provider */}
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "0.5px solid #e0e0e0",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#1a1a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                A
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>
                  Aleksander
                </p>
                <p style={{ fontSize: 12, color: "#aaa" }}>Membro desde 2024</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              {[
                { val: "12", lbl: "Avaliações" },
                { val: "4.5", lbl: "Nota média" },
                { val: "98%", lbl: "Resposta" },
              ].map(({ val, lbl }) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>
                    {val}
                  </p>
                  <p style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>
                    {lbl}
                  </p>
                </div>
              ))}
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "0.5px solid #ebebeb",
                margin: "0.75rem 0",
              }}
            />

            {[
              { icon: "🕐", text: "Responde em menos de 1h" },
              { icon: "📍", text: "Zona Norte, Rio de Janeiro" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                  fontSize: 13,
                  color: "#555",
                }}
              >
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* Safety badge */}
          <div
            style={{
              background: "#eeedfe",
              borderRadius: 12,
              border: "0.5px solid #afa9ec",
              padding: "1rem",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>🛡️</span>
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#3c3489",
                    marginBottom: 4,
                  }}
                >
                  Pagamento seguro
                </p>
                <p style={{ fontSize: 12, color: "#534ab7", lineHeight: 1.55 }}>
                  O pagamento só é liberado ao profissional após a confirmação
                  do serviço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
