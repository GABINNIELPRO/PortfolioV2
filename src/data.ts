// Tout le contenu du portfolio est ici : modifie ce fichier pour mettre à jour le site.

export const profile = {
  name: "Gabin Niel",
  role: "AI & Data Engineer",
  tagline:
    "Designing scalable data architectures, intelligent RAG systems, and cloud solutions that transform business challenges into actionable insights.",
  email: "gabin.niel.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabin-niel-749062233/",
  github: "https://github.com/GABINNIELPRO",
  cv: "/assets/CV.pdf",
}

export const about = [
  "Data Engineer specialized in building scalable data platforms and distributed data pipelines.",
  "Experienced in designing and deploying batch & streaming data pipelines using Spark, Kafka, and Airflow, as well as data retrieval and RAG systems.",
  "Focused on scalable architectures, retrieval systems, and production-grade AI solutions from data ingestion to deployment.",
]

export const roles = [
  {
    title: "Data Engineer",
    desc: "Building scalable data architectures and batch & streaming pipelines with Python, PySpark, Kafka, and Airflow",
  },
  {
    title: "Data & AI Engineer",
    desc: "Designing data platforms and integrating RAG and LLM-based solutions into production systems",
  },
  {
    title: "Data Platform",
    desc: "Deploying containerized data services with Docker, CI/CD, APIs, and scalable architectures",
  },
]

export const expertise = [
  { title: "Data Architecture", desc: "Star-schema warehouses, dimensional modeling, Bronze/Silver/Gold layers" },
  { title: "ETL/ELT Pipelines", desc: "Python, pandas, PySpark, data transformation" },
  { title: "Workflow Orchestration", desc: "Apache Airflow, DAGs, scheduling, monitoring" },
  { title: "Database Optimization", desc: "PostgreSQL, indexing, partitioning" },
  { title: "Search & RAG", desc: "Elasticsearch, vector databases, RAG systems" },
  { title: "Cloud & DevOps", desc: "AWS, Docker, containerization, CI/CD" },
  { title: "Real-time Processing", desc: "Kafka, Spark Streaming" },
  { title: "AI/ML Integration", desc: "LLM integration, RAG" },
]

export const projects = [
  {
    title: "RAG Platform",
    desc: "Retrieval-Augmented Generation system with Elasticsearch vector search, LLM integration, and semantic understanding for intelligent document processing.",
    tags: ["Python", "LLM", "Elasticsearch", "RAG"],
    url: "https://github.com/GABINNIELPRO/Retrieval-Augmented-Generative-Platform",
  },
  {
    title: "Data Pipeline Streaming",
    desc: "Real-time data ingestion and processing pipeline using Kafka, Spark Streaming with transformation and delivery to multiple sinks.",
    tags: ["Kafka", "Spark", "Real-time"],
    url: "https://github.com/GABINNIELPRO/Streaming-Data-Pipeline",
  },
  {
    title: "Data Warehouse",
    desc: "Enterprise data warehouse built on a Medallion architecture (Bronze, Silver, Gold) with query optimization for analytics and reporting.",
    tags: ["PostgreSQL", "Star Schema", "Medallion", "Analytics"],
    url: "https://github.com/GABINNIELPRO/SQL-Data-Warehouse",
  },
  {
    title: "Real Estate Price Prediction",
    desc: "Deep learning model predicting real estate values with full-stack deployment. Includes FastAPI backend, React frontend, automated CI/CD pipeline, and AWS infrastructure (S3, ECR, ECS, CloudWatch) for production-grade deployment.",
    tags: ["TensorFlow", "FastAPI", "AWS", "CI/CD", "Docker"],
    url: "https://github.com/GABINNIELPRO/MLOps_RandomForest",
  },
]

export const timeline = [
  {
    title: "Startup AI Agent Platform – VivaTech 2026",
    date: "2026",
    desc: "Developed an AI agent platform for VivaTech combining LLM orchestration, semantic retrieval, and intelligent routing across conversational, planning, and expert-matching workflows. Designed data processing and retrieval pipelines, integrated vector search and structured data sources, and built APIs to connect AI agents with the platform’s backend services. Focused on scalable architecture, reliable information retrieval, and production-oriented AI workflows.",
  },
  {
    title: "Data Engineering - Indonesia",
    date: "2025 - 2026",
    desc: "International engineering project focused on designing and industrializing a document-based RAG platform using a microservices architecture. Designed data processing and retrieval workflows for unstructured documents, developed Python and FastAPI services for preprocessing, indexing, semantic search, and LLM-powered generation, and integrated PostgreSQL, pgvector, and Elasticsearch. Implemented containerized services with Docker and orchestrated the platform through APIs and Nginx, with a focus on modularity, scalability, and production-ready deployment.",
  },
  {
    title: "Data Engineering - SKF S2M",
    date: "2025",
    desc: "Designed and developed a production-oriented multimodal RAG platform for industrial maintenance documentation, processing PDF, Word, image, and table data. Built Python microservices for document preprocessing, hybrid retrieval combining BM25 and vector search with Elasticsearch, Azure AI Search and pgvector, and integrated LLM and vision models for information extraction and generation. Developed APIs and a Chrome extension, with automated evaluation pipelines and CI/CD for deployment.",
  },
  {
    title: "Core Engineering Program - ESIGELEC",
    date: "2022 - 2025",
    desc: "Engineering studies specializing in Data Engineering and AI, with a focus on Python, SQL, distributed data processing, cloud architectures, machine learning, and software engineering. Developed practical projects involving Spark, Kafka, Airflow, data pipelines, databases, APIs, Docker, and modern AI systems.",
  },
  {
    title: "Prep School - Mathematics & Physics",
    date: "2020 - 2022",
    desc: "Intensive preparation course in mathematics and physics, building strong foundations in algorithmic thinking and scientific problem-solving.",
  },
]

export const skills = [
  { category: "Data Engineering", items: ["Python", "PySpark", "SQL", "PostgreSQL", "Apache Airflow", "Kafka"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
  { category: "AI & Machine Learning", items: ["LLMs", "RAG Systems", "Scikit-learn", "TensorFlow", "PyTorch"] },
  { category: "Databases & Search", items: ["Elasticsearch", "Redis", "Vector DBs", "Data Warehousing"] },
]
