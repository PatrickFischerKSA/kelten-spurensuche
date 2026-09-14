// Short, task-specific French comments. Free notes receive no automatic content grade.
const taskCommentsFR=[
 ["Bien joué ! Les trois objets sont notés. Leur place aide à comprendre le site.","Oui ! En 1857, on découvre le site. Les objets sont beaucoup plus anciens.","Votre idée est notée. Gardez-la : les prochains indices peuvent la changer."],
 ["Voilà ! Les Helvètes ont des voisins. Tous ces groupes ne portent pas le même nom.","Bien vu ! Deux objets se ressemblent. Mais cela ne prouve pas que des gens ont migré.","Exact ! Il y avait plusieurs peuples sur le territoire de la Suisse actuelle."],
 ["Bien joué ! Chaque objet a une fonction. Il raconte un peu la vie de tous les jours.","La chaîne est en place ! Plus de nourriture peut laisser du temps pour d’autres métiers.","Votre note est dans le dossier. L’eau peut aider à voyager. Mais les rives changent."],
 ["Oui ! Certains noms anciens existent encore sous une autre forme.","Bien vu ! On connaît la tombe. On ne connaît pas le nom de cette femme.","Exact ! Le vase vient de Mantoue. Ses lettres sont étrusques."],
 ["Vous avez trouvé Caturix ! À l’époque romaine, son nom est lié à Mars.","Votre note est ajoutée. César raconte cette histoire. Il faut garder son nom avec le récit.","Bien joué ! Un objet est une trace. Son histoire reste parfois une question."],
 ["Le parcours est retrouvé ! Le passage est bloqué, puis le groupe change de route.","Votre remarque est notée. Les chiffres de César sont incertains. La différence ne donne pas le nombre de morts.","Exact ! Le but est la Saintonge. La défaite a lieu à Bibracte."],
 ["Votre question est prête. César est aussi le vainqueur : son point de vue compte.","Oui, 107 avant J.-C. ! Ce combat est plus ancien que celui de Bibracte.","Vos observations sont notées. Ce tableau est beaucoup plus récent que le combat."],
 ["Les dossiers sont reliés ! Ces lieux montrent plusieurs moments de l’histoire.","Exact ! Aventicum est le centre. La culture gallo-romaine réunit des éléments celtes et romains.","Bien vu ! La civitas comprend aussi des terres et des habitants autour de la ville."],
 ["Vous avez trouvé Brenodurum ! Un oppidum est un habitat fortifié.","Bien vu ! Ces mots montrent un doute. Les os sont là, mais le rituel reste une idée.","Oui ! La vie continue sous Rome. Les cultures se rencontrent."],
 ["Vous avez trouvé le mot ! Une allégorie montre une idée avec une image.","Votre comparaison est notée. La même Helvetia peut raconter deux images de la Suisse.","Votre projet est dans le dossier. Chaque objet choisi peut porter une idée."],
 ["Votre observation est gardée. Écrire « inconnu » vaut mieux qu’inventer une date.","Votre note est gardée. Le lac est là, mais son bord n’a pas toujours été le même.","Votre lecture est notée. Helvetia accueille la République de Neuchâtel. Le monument date de 1898."],
 ["Bien joué ! Un peuple, une culture et un symbole ne sont pas la même chose.","Votre texte est prêt dans le dossier. Les objets, les récits et les images racontent chacun une partie de l’histoire.","Votre dernière note est gardée. Une bonne enquête peut finir avec une nouvelle question."]
];
function showSolvedComment(success=state.results[key()]?.correct){
 const box=document.querySelector('#solvedComment');if(!box)return;
 box.hidden=!success;
 box.innerHTML=success?`<span class="comment-label">Un petit mot…</span><p>${esc(taskCommentsFR[state.station][state.task])}</p>`:'';
}
