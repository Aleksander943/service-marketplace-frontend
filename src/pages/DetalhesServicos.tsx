export default function ServiceDetail() {
  return (
    <div style={styles.page}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          serviços<span style={styles.logoAccent}>já</span>
        </div>
        <div style={styles.navRight}>
          <button style={styles.btnPrimary}>Publicar serviço</button>
          <div style={styles.avatarBtn}>
            <div style={styles.avatarCircle}>A</div>
            Aleksander
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <a href="#" style={styles.breadcrumbLink}>Início</a>
        <span style={styles.breadcrumbSep}>/</span>
        <a href="#" style={styles.breadcrumbLink}>Informática</a>
        <span style={styles.breadcrumbSep}>/</span>
        <span style={styles.breadcrumbCurrent}>Sistemas & Automação</span>
      </div>

      {/* Conteúdo */}
      <div style={styles.content}>

        {/* Coluna esquerda */}
        <div >

          {/* Card principal */}
          <div style={styles.mainCard}>

            {/* Imagem */}
            <div>
              <span >INFORMÁTICA</span>
            </div>

            {/* Corpo */}
            <div style={styles.cardBody}>
              <h1 style={styles.serviceTitle}>
                🚀 Precisa de um sistema, site ou automação?
              </h1>

              <div >
                {["Desenvolvimento web", "Automação", "Full Stack", "React", "Node.js"].map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>

              <p style={styles.sectionLabel}>Sobre o serviço</p>
              <p style={styles.description}>
                Sou Desenvolvedor Full Stack e ajudo empresas e profissionais a transformarem ideias em
                soluções digitais modernas e eficientes. Crio sistemas personalizados, sites, landing pages
                e automações que economizam tempo e aumentam a produtividade do seu negócio.
              </p>
              <p style={{ ...styles.description, marginTop: 10 }}>
                Trabalhei em projetos para clientes de diferentes segmentos, sempre com foco em entrega de
                qualidade, prazo cumprido e suporte pós-entrega. Posso desenvolver do zero ou dar
                continuidade a projetos existentes.
              </p>

              <hr style={styles.divider} />

              <p style={styles.sectionLabel}>O que está incluído</p>
              <ul >
                {[
                  "Reunião inicial de levantamento de requisitos",
                  "Desenvolvimento e entrega do projeto completo",
                  "30 dias de suporte gratuito após entrega",
                  "Código-fonte organizado e documentado",
                  "Deploy e configuração no servidor do cliente",
                ].map((item) => (
                  <li key={item} style={styles.includedItem}>
                    <span style={styles.checkIcon}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prestador */}
            <div style={styles.providerRow}>
              <div style={styles.providerAvatar}>A</div>
              <div style={styles.providerInfo}>
                <div style={styles.providerName}>Aleksander</div>
                <div style={styles.providerMeta}>Membro desde jan. 2024 · Zona Norte, SP</div>
              </div>
              <a href="#" style={styles.providerLink}>Ver perfil →</a>
            </div>
          </div>

          {/* Avaliações */}
          <div style={styles.reviewsCard}>
            <div style={styles.reviewsHeader}>
              Avaliações <span style={styles.reviewsCount}>(3)</span>
            </div>

            {[
              {
                initials: "CM",
                name: "Carlos Mendes",
                rating: 5,
                date: "há 2 semanas",
                text: "Excelente profissional! Entregou o sistema no prazo e com qualidade. O suporte pós-entrega foi ótimo, resolveu todas as dúvidas rapidamente.",
              },
              {
                initials: "FS",
                name: "Fernanda Silva",
                rating: 4,
                date: "há 1 mês",
                text: "Ótimo serviço, criou minha landing page do zero. Poderia ter comunicado melhor algumas etapas, mas o resultado final ficou muito bom.",
              },
              {
                initials: "RO",
                name: "Ricardo Oliveira",
                rating: 5,
                date: "há 2 meses",
                text: "Recomendo demais! Automatizou todo o processo de emissão de notas da minha empresa. Economizei horas por semana.",
              },
            ].map((review, i, arr) => (
              <div
                key={review.name}
                style={{
                  ...styles.reviewItem,
                  borderBottom: i < arr.length - 1 ? "0.5px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <div style={styles.reviewTop}>
                  <div style={styles.reviewerAvatar}>{review.initials}</div>
                  <div>
                    <div style={styles.reviewerName}>{review.name}</div>
                    <div style={styles.stars}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                  </div>
                  <div style={styles.reviewDate}>{review.date}</div>
                </div>
                <p style={styles.reviewText}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div>
            <div style={styles.priceLabel}>A partir de</div>
            <div style={styles.priceValue}>R$ 500</div>

            <div style={styles.ratingRow}>
              <span style={styles.starsYellow}>★★★★★</span>
              <span style={styles.ratingText}>4.5 <span style={styles.ratingCount}>(3 avaliações)</span></span>
            </div>

            <button style={styles.btnContact}>💬 Entrar em contato</button>
            <button style={styles.btnOutline}>♡ Salvar anúncio</button>

            <div style={styles.infoRows}>
              {[
                { label: "📍 Região",         value: "Zona Norte, SP" },
                { label: "⏱ Responde em",     value: "~2 horas" },
                { label: "💼 Serviços feitos", value: "12" },
                { label: "📅 Disponibilidade", value: "Seg – Sáb" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  style={{
                    ...styles.infoRow,
                    borderBottom: i < arr.length - 1 ? "0.5px solid rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <span style={styles.infoLabel}>{row.label}</span>
                  <span style={styles.infoValue}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f0efeb",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#1a1a1a",
  },

  /* Navbar */
  navbar: {
    background: "#fff",
    borderBottom: "0.5px solid rgba(0,0,0,0.12)",
    padding: "0 24px",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { fontSize: 18, fontWeight: 500 },
  logoAccent: { fontWeight: 400, color: "#2563EB" },
  navRight: { display: "flex", alignItems: "center", gap: 12 },
  btnPrimary: {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "7px 14px",
    fontSize: 13,
    cursor: "pointer",
  },
  avatarBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "0.5px solid rgba(0,0,0,0.15)",
    borderRadius: 20,
    padding: "5px 12px 5px 6px",
    background: "#fff",
    fontSize: 13,
    cursor: "pointer",
  },
  avatarCircle: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#f0efeb",
    border: "0.5px solid rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 500,
    color: "#666",
  },

  /* Breadcrumb */
  breadcrumb: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "16px 24px 0",
    fontSize: 13,
    color: "#666",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  breadcrumbLink: { color: "#666", textDecoration: "none" },
  breadcrumbSep: { color: "#bbb" },
  breadcrumbCurrent: { color: "#1a1a1a" },

  /* Layout */
  content: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "20px 24px 48px",
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gap: 20,
    alignItems: "start",
  },
  leftCol: { display: "flex", flexDirection: "column", gap: 16 },

  /* Card principal */
  mainCard: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.12)",
    borderRadius: 12,
    overflow: "hidden",
  },
  imagePlaceholder: {
    width: "100%",
    height: 260,
    background: "#d1d5db",
    position: "relative",
  },
  catBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.5px",
    padding: "4px 10px",
    borderRadius: 8,
  },
  cardBody: { padding: "20px 24px" },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "#1a1a1a",
    lineHeight: 1.35,
    marginBottom: 12,
  },
  tags: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 },
  tag: {
    fontSize: 12,
    padding: "3px 10px",
    borderRadius: 20,
    border: "0.5px solid rgba(0,0,0,0.2)",
    color: "#555",
    background: "#f5f5f5",
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: 8,
    marginTop: 20,
  },
  description: { fontSize: 14, color: "#555", lineHeight: 1.7 },
  divider: {
    border: "none",
    borderTop: "0.5px solid rgba(0,0,0,0.1)",
    margin: "20px 0",
  },
  includedList: { listStyle: "none", display: "flex", flexDirection: "column", gap: 8 },
  includedItem: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#555" },
  checkIcon: { color: "#16a34a", fontSize: 15, marginTop: 1, flexShrink: 0 },

  /* Prestador */
  providerRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 24px",
    borderTop: "0.5px solid rgba(0,0,0,0.1)",
  },
  providerAvatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#f0efeb",
    border: "0.5px solid rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 500,
    color: "#666",
    flexShrink: 0,
  },
  providerInfo: { flex: 1 },
  providerName: { fontSize: 14, fontWeight: 500, color: "#1a1a1a" },
  providerMeta: { fontSize: 12, color: "#888", marginTop: 1 },
  providerLink: { fontSize: 12, color: "#2563EB", textDecoration: "none" },

  /* Avaliações */
  reviewsCard: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.12)",
    borderRadius: 12,
    padding: "20px 24px",
  },
  reviewsHeader: { fontSize: 16, fontWeight: 500, color: "#1a1a1a", marginBottom: 16 },
  reviewsCount: { color: "#aaa", fontWeight: 400, fontSize: 14 },
  reviewItem: { padding: "14px 0" },
  reviewTop: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 },
  reviewerAvatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#f0efeb",
    border: "0.5px solid rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 500,
    color: "#666",
    flexShrink: 0,
  },
  reviewerName: { fontSize: 13, fontWeight: 500, color: "#1a1a1a" },
  stars: { fontSize: 12, color: "#FBBF24" },
  reviewDate: { fontSize: 12, color: "#aaa", marginLeft: "auto" },
  reviewText: { fontSize: 13, color: "#666", lineHeight: 1.6 },

  /* Sidebar */
  sidebarCard: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.12)",
    borderRadius: 12,
    padding: 20,
    position: "sticky",
    top: 16,
  },
  priceLabel: { fontSize: 12, color: "#888", marginBottom: 2 },
  priceValue: { fontSize: 28, fontWeight: 500, color: "#1a1a1a", lineHeight: 1 },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    color: "#666",
    marginTop: 10,
    marginBottom: 18,
    paddingBottom: 16,
    borderBottom: "0.5px solid rgba(0,0,0,0.1)",
  },
  starsYellow: { color: "#FBBF24", fontSize: 15 },
  ratingText: { fontSize: 13, color: "#666" },
  ratingCount: { color: "#aaa" },
  btnContact: {
    width: "100%",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: 11,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  btnOutline: {
    width: "100%",
    background: "transparent",
    color: "#1a1a1a",
    border: "0.5px solid rgba(0,0,0,0.2)",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  infoRows: { marginTop: 16 },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "9px 0",
    fontSize: 13,
  },
  infoLabel: { color: "#888" },
  infoValue: { color: "#1a1a1a", fontWeight: 500 },
};