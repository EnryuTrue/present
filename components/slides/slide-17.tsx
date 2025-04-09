"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, ArrowRight, RefreshCw, CheckCircle } from "lucide-react"

export default function DataFlowSlide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const codeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const dataFlowSteps = [
    {
      title: "Composant React",
      icon: Code,
      color: "from-blue-500 to-blue-700",
      description: "Déclenche une requête API",
    },
    {
      title: "Axios",
      icon: ArrowRight,
      color: "from-purple-500 to-purple-700",
      description: "Envoie la requête HTTP",
    },
    {
      title: "API Django",
      icon: Server,
      color: "from-green-500 to-green-700",
      description: "Traite la requête",
    },
    {
      title: "Base de Données",
      icon: Database,
      color: "from-amber-500 to-amber-700",
      description: "Stocke/Récupère les données",
    },
    {
      title: "Réponse JSON",
      icon: RefreshCw,
      color: "from-red-500 to-red-700",
      description: "Retourne les données",
    },
    {
      title: "Rendu UI",
      icon: CheckCircle,
      color: "from-teal-500 to-teal-700",
      description: "Affiche les données",
    },
  ]

  const reactCode = `// EventList.jsx - Composant React
import { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Appel à l'API Django avec Axios
    axios.get('https://api.ticketster.com/events/')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="events-container">
      {loading ? (
        <p>Chargement des événements...</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`

  const djangoCode = `# views.py - API Django
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer

class EventList(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`

  return (
    <div className="slide bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 bg-repeat"></div>

      <motion.div
        className="relative w-full h-full flex flex-col justify-between p-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center justify-center" variants={itemVariants}>
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Code className="h-10 w-10 md:h-12 md:w-12 text-primary glow mr-3" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            Flux de Données React-Django
          </motion.h1>
        </motion.div>

        {/* Data Flow Diagram */}
        <motion.div className="flex-1 flex items-center" variants={itemVariants}>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-600/50 -translate-y-1/2 z-0"></div>
            
            <div className="flex justify-between relative z-10">
              {dataFlowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className={`bg-gradient-to-br ${step.color} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <p className="text-xs md:text-sm font-medium text-center max-w-[80px]">{step.title}</p>
                    <p className="text-[10px] text-gray-300 text-center max-w-[80px] mt-1">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-16 -translate-y-1/2 z-0 pointer-events-none">
              {Array(dataFlowSteps.length - 1).fill(0).map((_, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Code Examples */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[40vh]" variants={containerVariants}>
          {/* React Component */}
          <motion.div 
            className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 h-full overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-3 text-white flex items-center">
              <Code className="h-5 w-5 text-blue-400 mr-2" />
              Composant React
            </h3>
            <motion.div 
              className="text-xs md:text-sm h-[calc(100%-3rem)] overflow-auto font-mono bg-gray-900/50 p-3 rounded-lg"
              variants={codeVariants}
              style={{ lineHeight: 1.5 }}
            >
              <pre className="text-gray-300">{reactCode}</pre>
            </motion.div>
          </motion.div>

          {/* Django API */}
          <motion.div 
            className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 h-full overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-3 text-white flex items-center">
              <Server className="h-5 w-5 text-green-400 mr-2" />
              API Django
            </h3>
            <motion.div 
              className="text-xs md:text-sm h-[calc(100%-3rem)] overflow-auto font-mono bg-gray-900/50 p-3 rounded-lg"
              variants={codeVariants}
              style={{ lineHeight: 1.5 }}
            >
              <pre className="text-gray-300">{djangoCode}</pre>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}