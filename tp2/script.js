// Étape 2: Déclaration des variables
let tasks = [];
let taskIdCounter = 0;
let searchTerm = '';

// Étape 1: Éléments DOM:Document Object Model
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const searchInput = document.getElementById('searchInput');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

// Étape 2: Message de bienvenue
console.log("Bienvenue dans l'application de liste de tâches!");
console.log("Le script JavaScript fonctionne correctement.");

// Étape 6: Fonction pour ajouter une tâche
function ajouterTache() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Veuillez entrer une tâche!');
        return;
    }
    
    // Étape 8: Créer un objet tâche
    const newTask = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Étape 7: Ajouter la tâche au tableau
    tasks.push(newTask);
    
    // Réinitialiser le champ de saisie
    taskInput.value = '';
    
    // Mettre à jour l'affichage
    afficherTaches();
    
    // Étape 9: Sauvegarder dans le localStorage
    sauvegarderTaches();
}

// Étape 6: Fonction pour supprimer une tâche
function supprimerTache(taskId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        afficherTaches();
        sauvegarderTaches();
    }
}

// Étape 6: Fonction pour terminer une tâche
function terminerTache(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        afficherTaches();
        sauvegarderTaches();
    }
}

// Étape 7: Fonction pour afficher les tâches avec boucle
function afficherTaches() {
    // Vider la liste
    taskList.innerHTML = '';
    
    // Filtrer les tâches selon la recherche
    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Afficher un message si aucune tâche
    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.className = 'empty-state';
        emptyState.textContent = searchTerm ? 
            'Aucune tâche ne correspond à votre recherche.' : 
            'Aucune tâche pour le moment. Ajoutez-en une!';
        taskList.appendChild(emptyState);
    } else {
        // Étape 7: Boucle pour créer chaque élément de tâche
        filteredTasks.forEach(task => {
            // Étape 3: Création dynamique d'éléments
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.dataset.id = task.id;
            
            taskItem.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="complete-btn">${task.completed ? 'Annuler' : 'Terminer'}</button>
                    <button class="delete-btn">Supprimer</button>
                </div>
            `;
            
            // Étape 4: Ajouter des écouteurs d'événements
            const completeBtn = taskItem.querySelector('.complete-btn');
            const deleteBtn = taskItem.querySelector('.delete-btn');
            
            completeBtn.addEventListener('click', () => terminerTache(task.id));
            deleteBtn.addEventListener('click', () => supprimerTache(task.id));
            
            taskList.appendChild(taskItem);
        });
    }
    
    // Étape 10: Mettre à jour le compteur
    mettreAJourCompteur();
}

// Étape 10: Fonction pour mettre à jour le compteur de tâches
function mettreAJourCompteur() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const remainingTasks = totalTasks - completedTasks;
    
    taskCount.textContent = `Total: ${totalTasks} | Terminées: ${completedTasks} | Restantes: ${remainingTasks}`;
}

// Étape 10: Fonction pour supprimer toutes les tâches terminées
function supprimerTachesTerminees() {
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches terminées?')) {
        tasks = tasks.filter(task => !task.completed);
        afficherTaches();
        sauvegarderTaches();
    }
}

// Étape 10: Fonction pour supprimer toutes les tâches
function supprimerToutesTaches() {
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches?')) {
        tasks = [];
        afficherTaches();
        sauvegarderTaches();
    }
}

// Étape 10: Fonction pour filtrer les tâches
function filtrerTaches() {
    searchTerm = searchInput.value.trim();
    afficherTaches();
}

// Étape 9: Fonction pour sauvegarder les tâches dans le localStorage
function sauvegarderTaches() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskIdCounter', taskIdCounter.toString());
}

// Étape 9: Fonction pour charger les tâches depuis le localStorage
function chargerTaches() {
    const savedTasks = localStorage.getItem('tasks');
    const savedTaskIdCounter = localStorage.getItem('taskIdCounter');
    
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    
    if (savedTaskIdCounter) {
        taskIdCounter = parseInt(savedTaskIdCounter);
    }
    
    afficherTaches();
}

// Étape 4: Écouteurs d'événements
addTaskBtn.addEventListener('click', ajouterTache);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});

searchInput.addEventListener('input', filtrerTaches);
clearCompletedBtn.addEventListener('click', supprimerTachesTerminees);
clearAllBtn.addEventListener('click', supprimerToutesTaches);

// Étape 9: Charger les tâches au démarrage
document.addEventListener('DOMContentLoaded', chargerTaches);