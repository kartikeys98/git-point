export const ru = {
  auth: {
    login: {
      connectingToGitHub: 'Подключение к GitHub...',
      preparingGitPoint: 'Подготовка GitPoint...',
      cancel: 'ОТМЕНА',
      welcomeTitle: 'Добро пожаловать в GitPoint',
      welcomeMessage: 'Самый многофункциональный бесплатный GitHub-клиент',
      notificationsTitle: 'Управление уведомлениями',
      notificationsMessage:
        'Просматривайте и управляйте всеми вашими непрочитанными и активными уведомлениями',
      reposTitle: 'Репозитории и пользователи',
      reposMessage:
        'Легко получайте информацию о репозитории, пользователе и организации',
      issuesTitle: 'Задачи и Pull-запросы',
      issuesMessage:
        'Общайтесь, принимайте пулл-реквесты и делайте многое другое',
      signInButton: 'ВОЙТИ',
    },
    welcome: {
      welcomeTitle: 'Добро пожаловать в GitPoint',
    },
    events: {
      welcomeMessage:
        'Добро пожаловать! Это ваша лента новостей - она поможет следить вам за последней активностью в репозиториях, которые вы отслеживаете, и за пользователями, на которых вы подписаны.',
      commitCommentEvent: 'прокомментировал коммит',
      createEvent: 'создал {{object}}',
      deleteEvent: 'удалил {{object}}',
      issueCommentEvent: '{{action}} {{type}}',
      issueEditedEvent: '{{action}} свой комментарий в {{type}}',
      issueRemovedEvent: '{{action}} свой комментарий в {{type}}',
      issuesEvent: '{{action}} задачу',
      publicEvent: {
        action: 'сделал',
        connector: 'открытым',
      },
      pullRequestEvent: '{{action}} pull-запрос',
      pullRequestReviewEvent: '{{action}} просмотр кода pull-запроса',
      pullRequestReviewCommentEvent: '{{action}} pull-запрос',
      pullRequestReviewEditedEvent:
        '{{action}} свой комментарий в pull-запросе',
      pullRequestReviewDeletedEvent:
        '{{action}} свой комментарий в pull-запросе',
      releaseEvent: '{{action}} релиз',
      atConnector: 'на',
      toConnector: 'в',
      types: {
        pullRequest: 'pull-запрос',
        issue: 'задачу',
      },
      objects: {
        repository: 'репозиторий',
        branch: 'ветку',
        tag: 'тег',
      },
      actions: {
        added: 'добавил',
        created: 'создал',
        edited: 'отредактировал',
        deleted: 'удалил',
        assigned: 'назначил',
        unassigned: 'удалил из ответственных',
        labeled: 'добавил метку',
        unlabeled: 'убрал метку',
        opened: 'открыл',
        milestoned: 'запланировал',
        demilestoned: 'убрал из плана',
        closed: 'закрыл',
        reopened: 'заново открыл',
        review_requested: 'запрос просмотр изменений',
        review_request_removed: 'отметил запрос на просмотр изменений',
        submitted: 'отправил',
        dismissed: 'отклонил',
        published: 'отправил',
        publicized: 'опубликовал',
        privatized: 'сделал закрытым',
        starred: 'отметил',
        pushedTo: 'отправил в',
        forked: 'клонировал',
        commented: 'прокомментировал',
        removed: 'удалил',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Видите не все ваши организации?',
      orgsRequestApprovalBottom:
        'Возможно, вам придется запросить у них одобрение.',
      codePushCheck: 'Проверить обновления',
      codePushChecking: 'Проверка обновления...',
      codePushUpdated: 'Приложение обновлено',
      codePushAvailable: 'Доступно обновление!',
      codePushNotApplicable: 'Не поддерживается в режиме отладки',
    },
    userOptions: {
      donate: 'Сделать пожертвование',
      title: 'Настройки',
      language: 'Язык',
      privacyPolicy: 'Политика конфиденциальности',
      signOut: 'Выйти',
    },
    privacyPolicy: {
      title: 'Политика конфиденциальности',
      effectiveDate: 'Последнее обновление: 15 июля 2017 г.',
      introduction:
        'Мы рады, что вы решили использовать GitPoint. Настоящая Политика конфиденциальности уведомляет вас о том, что мы делаем и не делаем с данными нашего пользователя.',
      userDataTitle: 'ДАННЫЕ ПОЛЬЗОВАТЕЛЯ',
      userData1:
        'Мы никак не используем ваши данные на GitHub. После аутентификации токен пользователя OAuth сохраняется непосредственно в хранилище устройства. Мы не можем получить его. Мы никогда не просматриваем токен доступа пользователя и не храним его вообще.',
      userData2:
        'Это означает, что мы никоим образом не можем использовать или передавать данные пользователя GitHub. Если его личные данные когда-либо становятся видимыми, мы не будем их записывать и просматривать. Если это случайно произошло, мы удалим их немедленно, используя безопасные методы удаления. Кроме того, мы специально настроили аутентификацию так, чтобы этого никогда не произшло.',
      analyticsInfoTitle: 'ИНФОРМАЦИЯ ОБ АНАЛИТИКЕ',
      analyticsInfo1:
        'В настоящее время мы используем Google Analytics и iTunes App Analytics, чтобы измерить тенденции трафика и использования GitPoint. Эти инструменты собирают информацию, отправленную вашим устройством, включая версию устройства и платформы, регион и реферер. Этой информации недостаточно для идентификации какого-либо конкретного отдельного пользователя, никакая другая личная информация не передаётся.',
      analyticsInfo2:
        'Если мы подключим другую стороннюю платформу для сбора трассировок стека, журналов ошибок или большей информации для аналитики, мы сделаем так, чтобы пользовательские данные оставались анонимными и зашифрованными.',
      openSourceTitle: 'ОТКРЫТЫЙ ИСХОДНЫЙ КОД',
      openSource1:
        'GitPoint - это продукт с открытым исходным кодом, и история вкладов в приложение всегда будет видна публике.',
      openSource2:
        'С каждым вкладом в приложение всегда выполняется проверка кода, чтобы никто не мог включить любого вида вредоносный код.',
      contactTitle: 'КОНТАКТЫ',
      contact1:
        'Благодарим вас за ознакомление с нашей Политикой конфиденциальности. Мы надеемся, что вам понравится использовать GitPoint так же, как и нам нравится его разрабатывать',
      contact2:
        'Если у вас есть какие-либо вопросы по поводу этой Политики конфиденциальности или GitPoint в целом, пожалуйста, создайте задачу в',
      contactLink: 'репозитории GitPoint',
    },
  },
  notifications: {
    main: {
      unread: 'не прочитано',
      participating: 'участвующий',
      all: 'все',
      unreadButton: 'Не прочитано',
      participatingButton: 'Участвующий',
      allButton: 'Все',
      retrievingMessage: 'Получение уведомлений',
      noneMessage: 'У вас нет уведомлений по этому типу',
      markAllAsRead: 'Отметить все как прочитанные',
    },
  },
  search: {
    main: {
      repositoryButton: 'Репозитории',
      userButton: 'Пользователи',
      searchingMessage: 'Поиск по {{query}}',
      searchMessage: 'Поиск {{type}}',
      repository: 'репозиториев',
      user: 'пользователей',
    },
  },
  user: {
    profile: {
      userActions: 'Действия с пользователем',
      unfollow: 'Отписаться',
      follow: 'Следить',
    },
    repositoryList: {
      title: 'Репозитории',
    },
    followers: {
      title: 'Подписчики',
      text: 'Подписчиков',
      followsYou: 'Подписан на вас',
    },
    following: {
      title: 'Подписки',
      text: 'Подписок',
      followingYou: 'Подписан',
    },
  },
  repository: {
    main: {
      shareRepositoryTitle: 'Поделиться {{repoName}}',
      shareRepositoryMessage: 'Проверить {{repoName}} на GitHub. {{repoUrl}}',
      repoActions: 'Действия с репозиторием',
      forkAction: 'Клонировать',
      starAction: 'Отметить',
      unstarAction: 'Снять отметку',
      shareAction: 'Поделиться',
      unwatchAction: 'Перестать наблюдать',
      watchAction: 'Следить',
      ownerTitle: 'ВЛАДЕЛЕЦ',
      contributorsTitle: 'УЧАСТНИКИ',
      noContributorsMessage: 'Участники не найдены',
      sourceTitle: 'КОД',
      readMe: 'README',
      viewSource: 'Смотреть код',
      issuesTitle: 'ЗАДАЧИ',
      noIssuesMessage: 'Нет задач',
      noOpenIssuesMessage: 'Нет открытых задач',
      viewAllButton: 'Смотреть все',
      newIssueButton: 'Новая задача',
      pullRequestTitle: 'PULL-ЗАПРОСЫ',
      noPullRequestsMessage: 'Нет pull-запросов',
      noOpenPullRequestsMessage: 'Нет открытых pull-запросов',
      starsTitle: 'Звёзд',
      forksTitle: 'Форков',
      forkedFromMessage: 'склонировано от',
      starred: 'Отмечено',
      watching: 'Наблюдаю',
      watchers: 'Наблюдателей',
    },
    codeList: {
      title: 'Код',
    },
    issueList: {
      title: 'Задачи',
      openButton: 'Открыто',
      closedButton: 'Закрыто',
      searchingMessage: 'Поиск по {{query}}',
      noOpenIssues: 'Не найдено открытых задач!',
      noClosedIssues: 'Не найдено закрытых задач!',
    },
    pullList: {
      title: 'Pull-запросы',
      openButton: 'Открыто',
      closedButton: 'Закрыто',
      searchingMessage: 'Поиск по {{query}}',
      noOpenIssues: 'Не найдено открытых pull-запросов!',
      noClosedIssues: 'Не найдено закрытых pull-запросов!',
    },
    pullDiff: {
      title: 'Сравнить изменения',
      numFilesChanged: '{{numFilesChanged}} файлов',
      new: 'НОВЫЙ',
      deleted: 'УДАЛЕННЫЙ',
      fileRenamed: 'Файл переименован без каких-либо изменений',
    },
    readMe: {
      readMeActions: 'Действия с README',
    },
  },
  organization: {
    main: {
      membersTitle: 'УЧАСТНИКИ',
      descriptionTitle: 'ОПИСАНИЕ',
    },
    organizationActions: 'Действия с организацией',
  },
  issue: {
    settings: {
      title: 'Настройки',
      pullRequestType: 'Pull-запросы',
      issueType: 'задачу',
      applyLabelButton: 'Добавить ярлык',
      noneMessage: 'Пока нет',
      labelsTitle: 'ЯРЛЫКИ',
      assignYourselfButton: 'Назначить на самого себя',
      assigneesTitle: 'ОТВЕТСТВЕННЫЕ',
      actionsTitle: 'ДЕЙСТВИЯ',
      unlockIssue: 'Разблокировать {{issueType}}',
      lockIssue: 'Блокировать {{issueType}}',
      closeIssue: 'Закрыть {{issueType}}',
      reopenIssue: 'Открыть снова {{issueType}}',
      areYouSurePrompt: 'Вы уверены?',
      applyLabelTitle: 'Добавить ярлык к этой задаче',
    },
    main: {
      assignees: 'Ответственные',
      mergeButton: 'Принять pull-запрос',
      noDescription: 'Нет описания.',
      lockedCommentInput:
        'Заблокировано, но вы все ещё можете прокомментировать...',
      commentInput: 'Добавить комментарий...',
      commentButton: 'Отправить',
      lockedIssue: 'Задача заблокирована',
      states: {
        open: 'Открыто',
        closed: 'Закрыто',
        merged: 'Слито',
      },
      screenTitles: {
        issue: 'Задача',
        pullRequest: 'Pull-запрос',
      },
      openIssueSubTitle:
        '#{{number}} открыт {{time}} назад пользователем {{user}}',
      closedIssueSubTitle:
        '#{{number}} закрыт {{time}} назад пользователем {{user}}',
      issueActions: 'Действия с задачей',
    },
    newIssue: {
      title: 'Новая задача',
      missingTitleAlert: 'Нужно указать название задачи',
      issueTitle: 'Название задачи',
      writeATitle: 'Напишите название задачи',
      issueComment: 'Комментарий задачи',
      writeAComment: 'Напишите комментарий к задаче',
    },
    pullMerge: {
      title: 'Принять pull-запрос',
      createMergeCommit: 'Создать коммит слияния',
      squashAndMerge: 'Объединить и слить',
      merge: 'слить',
      squash: 'объединить',
      missingTitleAlert: 'Нужно написать заголовок к коммиту!',
      commitTitle: 'Заголовок коммита',
      writeATitle: 'Напишите заголовок коммита',
      commitMessage: 'Текст сообщения коммита',
      writeAMessage: 'Напишите текст сообщения коммита',
      mergeType: 'Тип слияния',
      changeMergeType: 'Изменить тип слияния',
    },
  },
  common: {
    bio: 'СПРАВКА',
    stars: 'Звёзд',
    orgs: 'ОРГАНИЗАЦИИ',
    noOrgsMessage: 'Нет организаций',
    info: 'ИНФОРМАЦИЯ',
    company: 'Компания',
    location: 'Местонахождение',
    email: 'Электронная почта',
    website: 'Сайт',
    repositories: 'Репозиториев',
    pullRequest: 'pull-запрос',
    issue: 'задача',
    cancel: 'Отменить',
    yes: 'Да',
    ok: 'OK',
    submit: 'Отправить',
    relativeTime: {
      past: '%s',
      s: 'сейчас',
      m: '1 м',
      mm: '%d м',
      h: '1 ч',
      hh: '%d ч',
      d: '1 д',
      dd: '%d д',
      M: '1 мес',
      MM: '%d мес',
      y: '1 г',
      yy: '%d г',
    },
    abbreviations: {
      thousand: ' тыс.',
    },
    openInBrowser: 'Открыть в браузере',
  },
};
