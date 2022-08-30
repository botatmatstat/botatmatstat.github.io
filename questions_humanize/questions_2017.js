questions = [{
    "question": String.raw`При проверке гипотезы о равенстве долей можно использовать распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_{m+n}\)
            `,
            "B": String.raw`
                \(t_{m+n-2}\)
            `,
            "C": String.raw`
                \(N(0;1)\)
            `,
            "D": String.raw`
                \(t_{m-1,n-1}\)
            `,
            "E": String.raw`
                \(\chi^2_{m+n-2}\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из равномерного распределения на отрезке \([0; \, \theta]\), где \(\theta > 0\) — неизвестный параметр. Несмещённой является оценка`,
    "answers": {
    
            "A": String.raw`
                \(2 \bar{X}\)
            `,
            "B": String.raw`
                \(\bar{X} / 2\)
            `,
            "C": String.raw`
                \(X_{(1)}\)
            `,
            "D": String.raw`
                \(X_{1}\)
            `,
            "E": String.raw`
                \(\bar{X}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для построения доверительного интервала для разности математических ожиданий по двум независимым нормальным выборкам размера \(m\) и \(n\) в случае неизвестных равных дисперсий используется распределение`,
    "answers": {
    
            "A": String.raw`
                \(\chi^2_{m+n-2}\)
            `,
            "B": String.raw`
                \(t_{m-1,n-1}\)
            `,
            "C": String.raw`
                \(t_{m+n-2}\)
            `,
            "D": String.raw`
                \(N(0;m+n-2)\)
            `,
            "E": String.raw`
                \(t_{m+n}\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Априорная функция плотности параметра \(a\) пропорциональна \(\exp(-a)\) при \(a>0\). Функция правдоподобия пропорциональна \(\exp(-a^2+a)\). При \(a>0\) апостериорная плотность пропорциональна`,
    "answers": {
    
            "A": String.raw`
                \(\exp(-a^2)\)
            `,
            "B": String.raw`
                \(\exp(-a) - \exp(-a^2+a)\)
            `,
            "C": String.raw`
                \(\exp(-a) + \exp(-a^2+a)\)
            `,
            "D": String.raw`
                \(\exp(a^2+2a)\)
            `,
            "E": String.raw`
                \(\exp(-a^2+a) - \exp(-a)\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По большой выборке была построена оценка максимального правдоподобия \(\hat a\). Оказалось, что \(\ell''(\hat a) = -4\). Ширина 95%-го доверительного интервала для параметра \(a\) примерно равна`,
    "answers": {
    
            "A": String.raw`
                \(5\)
            `,
            "B": String.raw`
                \(1\)
            `,
            "C": String.raw`
                \(3\)
            `,
            "D": String.raw`
                \(4\)
            `,
            "E": String.raw`
                \(2\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из распределения Пуассона с параметром \(\lambda > 0\). Информация Фишера о параметре \(\lambda\), заключенная в\textasciitilde{}\textsc{одном} наблюдении случайной выборки, равна`,
    "answers": {
    
            "A": String.raw`
                \(F_{m-1,n-1}\)
            `,
            "B": String.raw`
                \(\lambda / n\)
            `,
            "C": String.raw`
                \(\lambda\)
            `,
            "D": String.raw`
                \(e^{-\lambda}\)
            `,
            "E": String.raw`
                \(n / \lambda\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При тестировании гипотезы о равенстве дисперсий по двум независимым нормальным выборкам размером \(m\) и \(n\) тестовая статистика может иметь распределение`,
    "answers": {
    
            "A": String.raw`
                \(F_{m,n}\)
            `,
            "B": String.raw`
                \(t_{m+n-2}\)
            `,
            "C": String.raw`
                \(F_{m+1,n+1}\)
            `,
            "D": String.raw`
                \(F_{m,n - 2}\)
            `,
            "E": String.raw`
                \(\chi^2_{m+n-2}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Если величина \(\hat\theta\) имеет нормальное распределение \(N(3;0.01^2)\), то, согласно дельта-методу, \(\hat\theta^3\) имеет примерно нормальное распределение`,
    "answers": {
    
            "A": String.raw`
                \(N(27;3\cdot 0.01^2)\)
            `,
            "B": String.raw`
                \(N(3;3\cdot 0.01^2)\)
            `,
            "C": String.raw`
                \(N(27;27\cdot 0.01^2)\)
            `,
            "D": String.raw`
                \(N(4;16\cdot 0.01^2)\)
            `,
            "E": String.raw`
                \(N(27;27^2\cdot 0.01^2)\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В методе главных компонент`,
    "answers": {
    
            "A": String.raw`
                выборочная дисперсия первой главной компоненты равна единице
            `,
            "B": String.raw`
                \(F_{m-1,n-1}\)
            `,
            "C": String.raw`
                выборочная дисперсия первой главной компоненты минимальна
            `,
            "D": String.raw`
                выборочная корреляция первой и второй главных компонент равна единице
            `,
            "E": String.raw`
                первая главная компонента сильнее всего коррелирована с первой
переменной
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Преподаватель в течение 10 лет ведет статистику о посещаемости лекций. Он заметил, что перед контрольной работой посещаемость улучшается. Преподаватель составил следующую таблицу сопряженности  \vspace{5mm} \begin{tabular}{lrr} \toprule & Контрольная будет & Контрольной не будет \\ \midrule Пришло больше половины курса & 35 & 80 \\ Пришло меньше половины курса & 5 & 200 \\ \bottomrule \end{tabular} \vspace{5mm}  Если \(T\) — статистика Пирсона, а \(k\) — число степеней свободы её распределения, то`,
    "answers": {
    
            "A": String.raw`
                \(T>52\), \(k=2\)
            `,
            "B": String.raw`
                \(T>52\), \(k=3\)
            `,
            "C": String.raw`
                \(T<52\), \(k=4\)
            `,
            "D": String.raw`
                \(T>52\), \(k=1\)
            `,
            "E": String.raw`
                \(T<52\), \(k=1\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По случайной выборке из 49 наблюдений было оценено выборочное среднее \(\bar{X} = 8\) и несмещённая оценка дисперсии \(\hat{\sigma}^2 = 4\) проверяется гипотеза \(H_0: \mu = 7\) против \(H_a: \mu \ne 7\). Тогда значение тестовой статистики`,
    "answers": {
    
            "A": String.raw`
                1.5
            `,
            "B": String.raw`
                1.75
            `,
            "C": String.raw`
                3.5
            `,
            "D": String.raw`
                3
            `,
            "E": String.raw`
                -1.75
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1\), \(X_2\), \ldots, \(X_{10}\) представляют собой случайную выборку с \(\operatorname{E}(X_i) = 2\theta - 1\). Оказалось, что \(\bar X_{10}=3\). Оценка \(\hat\theta_{ML}\) метода максимального правдоподобия равна`,
    "answers": {
    
            "A": String.raw`
                \(15.5\)
            `,
            "B": String.raw`
                \(2\)
            `,
            "C": String.raw`
                \(3\)
            `,
            "D": String.raw`
                Недостаточно данных
            `,
            "E": String.raw`
                \(1\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке из 100 наблюдений \(X_1,\ldots,X_{n}\), имеющей нормальное распределение с неизвестной дисперсией, был получен 95% доверительный интервал для математического ожидания \([16,24]\). Значит, \(\bar{X}\) был равен`,
    "answers": {
    
            "A": String.raw`
                19
            `,
            "B": String.raw`
                21
            `,
            "C": String.raw`
                18
            `,
            "D": String.raw`
                20.5
            `,
            "E": String.raw`
                20
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Вася 50 раз подбросил монетку, 23 раза она выпала «орлом», 27 раз --- «решкой». При проверке гипотезы о том, что монетка — «честная», Вася будет пользоваться статистикой, имеющей распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_{51}\)
            `,
            "B": String.raw`
                \(N(0,1)\)
            `,
            "C": String.raw`
                \(t_{50}\)
            `,
            "D": String.raw`
                \(t_{49}\)
            `,
            "E": String.raw`
                \(\chi^2_{49}\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Требуется проверить гипотезу о равенстве математических ожиданий по независимым нормальным выборкам размером 33 и 16 наблюдений. Истинные дисперсии по обеим выборкам известны, совпадают и равны 196. Разница выборочных средних равна 1. Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(1/2\)
            `,
            "B": String.raw`
                \(1/7\)
            `,
            "C": String.raw`
                \(1/4\)
            `,
            "D": String.raw`
                \(1/14\)
            `,
            "E": String.raw`
                \(1/49\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из нормального распределения с математическим ожиданием \(\mu = 3\) и дисперсией \(\sigma^2\). Несмещённой оценкой параметра \(\sigma^2\) является`,
    "answers": {
    
            "A": String.raw`
                \(\frac{1}{n+1} \sum_{i=1}^{n}(X_i - \bar{X})^2\)
            `,
            "B": String.raw`
                \(\frac{1}{n-1} \sum_{i=1}^{n}(X_i - 3)^2\)
            `,
            "C": String.raw`
                \(\frac{1}{n+1} \sum_{i=1}^{n}(X_i - 3)^2\)
            `,
            "D": String.raw`
                \(\frac{1}{n} \sum_{i=1}^{n}(X_i - 3)^2\)
            `,
            "E": String.raw`
                \(\frac{1}{n} \sum_{i=1}^{n}(X_i - \bar{X})^2\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке \(X_1,\ldots,X_{n}\), имеющей нормальное распределение с неизвестным математическим ожиданием, строится доверительный интервал для дисперсии. Он НЕ может иметь вид`,
    "answers": {
    
            "A": String.raw`
                \((0, a)\)
            `,
            "B": String.raw`
                \((b, +\infty)\)
            `,
            "C": String.raw`
                \((a, b)\)
            `,
            "D": String.raw`
                \((-\infty, a)\)
            `,
            "E": String.raw`
                \((0, +\infty)\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для проверки гипотезы о равенстве дисперсий используются две независимые нормальные выборки размером 25 и 16 наблюдений. Несмещённая оценка дисперсии по первой выборке составила 36, по второй — 49. Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(1.85\)
            `,
            "B": String.raw`
                \(1.36\)
            `,
            "C": String.raw`
                \(2.13\)
            `,
            "D": String.raw`
                \(1.17\)
            `,
            "E": String.raw`
                \(1.56\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из дискретного распределения с таблицей распределения  \vspace{5mm} \begin{tabular}{cccc} \toprule $X_i$    & $-2$     & $0$   & $1$  \\ \midrule $\operatorname{P}(\cdot)$        & $1/2 - \theta$      & $1/2$    & $\theta$  \\ \bottomrule \end{tabular} \vspace{5mm}  Состоятельной является оценка`,
    "answers": {
    
            "A": String.raw`
                \(\bar{X}\)
            `,
            "B": String.raw`
                \(\bar{X} + 1\)
            `,
            "C": String.raw`
                \((\bar{X} - 1) / 3\)
            `,
            "D": String.raw`
                \(\bar{X} - 1\)
            `,
            "E": String.raw`
                \((\bar{X} + 1) / 3\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1\), \(X_2\), \ldots, \(X_n\) представляют собой случайную выборку из \(N(\mu; \sigma^2)\). Вася оценивает оба параметра с помощью максимального правдоподобия. При этом`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{E}(\hat \mu)=\mu\), \(\operatorname{E}(\hat\sigma^2) = \sigma^2\)
            `,
            "B": String.raw`
                \(\operatorname{E}(\hat \mu)=\mu\), \(\operatorname{E}(\hat\sigma^2) < \sigma^2\)
            `,
            "C": String.raw`
                \(\operatorname{E}(\hat \mu)=\mu\), \(\operatorname{E}(\hat\sigma^2) > \sigma^2\)
            `,
            "D": String.raw`
                \(\operatorname{E}(\hat \mu)>\mu\), \(\operatorname{E}(\hat\sigma^2) = \sigma^2\)
            `,
            "E": String.raw`
                \(\operatorname{E}(\hat \mu)<\mu\), \(\operatorname{E}(\hat\sigma^2) = \sigma^2\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для проверки гипотезы о равенстве математических ожиданий используются две нормальные выборки размером 25 и 16 наблюдений. Разница выборочных средних равна 1. Тестовая статистика НЕ может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(2.13\)
            `,
            "B": String.raw`
                \(1.17\)
            `,
            "C": String.raw`
                \(1.85\)
            `,
            "D": String.raw`
                \(1.56\)
            `,
            "E": String.raw`
                \(1.36\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дана реализация выборки: 7, -1, 3, 0. Выборочный начальный момент второго порядка равен`,
    "answers": {
    
            "A": String.raw`
                \(59\)
            `,
            "B": String.raw`
                \(0.75\)
            `,
            "C": String.raw`
                \(19.75\)
            `,
            "D": String.raw`
                \(2.25\)
            `,
            "E": String.raw`
                \(-1\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(\hat\sigma^2_1\) и \(\hat\sigma^2_2\) — несмещённые оценки дисперсий, полученные по независимым нормальным выборкам размером \(m\) и \(n\) соответственно. Тогда статистика \(\hat\sigma^2_1/\hat\sigma^2_2\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_{m+n-2}\)
            `,
            "B": String.raw`
                \(\chi^2_{m+n-2}\)
            `,
            "C": String.raw`
                \(F_{m,n}\)
            `,
            "D": String.raw`
                \(F_{m,n-2}\)
            `,
            "E": String.raw`
                \(F_{m+1, n+1}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Трёх случайно выбранных студентов 2-го курса попросили оценить сложность Теории вероятностей и Статистики по 100 балльной шкале  \vspace{5mm} \begin{tabular}{lrrr} \toprule & Аким & Ариадна & Темуужин \\ \midrule Теория вероятностей & 70 & 75 & 82 \\ Статистика & 64 & 69 & 100 \\ \bottomrule \end{tabular} \vspace{5mm}  Тест знаков отвергает гипотезу о том, что Статистика и Теории вероятностей одинаково сложны в пользу альтернативы, что Статистика проще при уровне значимости`,
    "answers": {
    
            "A": String.raw`
                \(1/3\)
            `,
            "B": String.raw`
                \(0.51\)
            `,
            "C": String.raw`
                \(0.05\)
            `,
            "D": String.raw`
                \(3/8\)
            `,
            "E": String.raw`
                \(0.1\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из нормального распределения с математическим ожиданием \(\mu\) и дисперсией \(\sigma^2 = 3\). Информация Фишера о параметре \(\mu\), заключенная в \textsc{двух} наблюдениях случайной выборки, равна`,
    "answers": {
    
            "A": String.raw`
                \(2 / \mu\)
            `,
            "B": String.raw`
                \(3 / 2\)
            `,
            "C": String.raw`
                \(2 / 3\)
            `,
            "D": String.raw`
                \(2 \mu^2\)
            `,
            "E": String.raw`
                \(\mu / 2\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Нелогарифмированная функция правдоподобия`,
    "answers": {
    
            "A": String.raw`
                убывает по оцениваемому параметру \(\theta\)
            `,
            "B": String.raw`
                асимпотитически распределена \(N(0;1)\)
            `,
            "C": String.raw`
                возрастает по оцениваемому параметру \(\theta\)
            `,
            "D": String.raw`
                может принимать отрицательные значения
            `,
            "E": String.raw`
                может принимать значения больше единицы
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке \(X_1,\ldots,X_{n}\), имеющей нормальное распределение с неизвестным математическим ожиданием, проверяется гипотеза о дисперсии \(H_0: \sigma^2 = 30\) против \(H_a: \sigma^2 \ne 30\). Известно, что \(\sum_{i=1}^{n} (X_i - \bar{X})^2 = 270\). Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                9
            `,
            "B": String.raw`
                Не хватает данных
            `,
            "C": String.raw`
                27
            `,
            "D": String.raw`
                6
            `,
            "E": String.raw`
                3
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Экзамен принимают два преподавателя: Б.Б.\textasciitilde{}Злой и Е.В.\textasciitilde{}Добрая. Они поставили следующие оценки:  \vspace{5mm} \begin{tabular}{lccccc} \toprule Е.В. Добрая & 6 & 4 & 7  & 8 &   \\ Б.Б. Злой   & 2 & 3 & 10 & 8 & 3 \\ \bottomrule \end{tabular} \vspace{5mm}  Значение статистики Вилкоксона для гипотезы о совпадении распределений оценок равно`,
    "answers": {
    
            "A": String.raw`
                \(20.5\)
            `,
            "B": String.raw`
                \(7.5\)
            `,
            "C": String.raw`
                \(20\)
            `,
            "D": String.raw`
                \(19\)
            `,
            "E": String.raw`
                \(22.5\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1\), \(X_2\), \ldots, \(X_{10}\) представляют собой случайную выборку с \(\operatorname{E}(X_i) = 2\theta - 1\). Оказалось, что \(\bar X_{10}=3\). Оценка \(\hat\theta_{MM}\) метода моментов равна`,
    "answers": {
    
            "A": String.raw`
                \(2\)
            `,
            "B": String.raw`
                \(1\)
            `,
            "C": String.raw`
                \(15.5\)
            `,
            "D": String.raw`
                \(3\)
            `,
            "E": String.raw`
                Недостаточно данных
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дана реализация выборки: 7, -1, 3, 0. Выборочная функция распределения в точке 0 принимает значение`,
    "answers": {
    
            "A": String.raw`
                \(0.75\)
            `,
            "B": String.raw`
                \(0.25\)
            `,
            "C": String.raw`
                \(0\)
            `,
            "D": String.raw`
                \(0.5\)
            `,
            "E": String.raw`
                \(1\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для построения доверительного интервала для разности математических ожиданий в двух нормальных выборках размеров \(m\) и \(n\) при известных и не равных дисперсиях тестовая статистика имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_{m+n}\)
            `,
            "B": String.raw`
                \(N(0;1)\)
            `,
            "C": String.raw`
                \(\chi^2_{m+n-2}\)
            `,
            "D": String.raw`
                \(t_{m+n-2}\)
            `,
            "E": String.raw`
                \(t_{m-1,n-1}\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При проверке гипотезы о равенстве дисперсий в двух выборках размером в 3 и 5 наблюдений было получено значение тестовой статистики 10. Если оценка дисперсии по одной из выборок равна 8, то другая оценка дисперсии может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(4/5\)
            `,
            "B": String.raw`
                \(4\)
            `,
            "C": String.raw`
                \(4/3\)
            `,
            "D": String.raw`
                \(25\)
            `,
            "E": String.raw`
                \(1/5\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из дискретного распределения с таблицей распределения  \vspace{5mm} \begin{tabular}{cccc} \toprule $X_i$  & $-2$    & $0$      & $1$  \\ \midrule $\operatorname{P}(\cdot)$        & $1/2 - \theta$      & $1/2$    & $\theta$  \\ \bottomrule \end{tabular} \vspace{5mm}  Несмещённой является оценка`,
    "answers": {
    
            "A": String.raw`
                \((\bar{X} + 1) / 3\)
            `,
            "B": String.raw`
                \(\bar{X} - 1\)
            `,
            "C": String.raw`
                \(\bar{X} + 1\)
            `,
            "D": String.raw`
                \((\bar{X} - 1) / 3\)
            `,
            "E": String.raw`
                \(\bar{X}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из распределения с плотностью распределения \[ f(x; \theta) = \begin{cases} \frac{1}{\theta} e^{-\frac{x}{\theta}}, \text{ при } x \geq 0, \\ 0, \text{ при } x < 0 \end{cases}, \] где \(\theta > 0\) — неизвестный параметр распределения. Информация Фишера о параметре \(\theta\), заключенная в \textsc{трёх} наблюдениях случайной выборки, равна`,
    "answers": {
    
            "A": String.raw`
                \(\theta^2 / 3\)
            `,
            "B": String.raw`
                \(3 / \theta^2\)
            `,
            "C": String.raw`
                \(1 / \theta\)
            `,
            "D": String.raw`
                \(\theta^2\)
            `,
            "E": String.raw`
                \(\theta\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Есть два неизвестных параметра, \(\theta\) и \(\gamma\). Вася проверяет гипотезу \(H_0\): \(\theta = 1\) и \(\gamma = 2\) против альтернативной гипотезы о том, что хотя бы одно из равенств нарушено. Выберите верное утверждение об асимптотическом распределении статистики отношения правдоподобия, \(LR\):`,
    "answers": {
    
            "A": String.raw`
                И при \(H_0\), и при \(H_a\), \(LR \sim \chi_2^2\)
            `,
            "B": String.raw`
                Если верна \(H_0\), то \(LR \sim \chi_1^2\)
            `,
            "C": String.raw`
                Если верна \(H_a\), то \(LR \sim \chi_2^2\)
            `,
            "D": String.raw`
                Если верна \(H_0\), то \(LR \sim \chi_2^2\)
            `,
            "E": String.raw`
                И при \(H_0\), и при \(H_a\), \(LR \sim \chi_1^2\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке из 5 наблюдений \(X_1,\ldots,X_{5}\), имеющей экспоненциальное распределение, для проверки гипотезы о математическом ожидании \(H_0: \mu = \mu_0\) против \(H_a: \mu \ne \mu_0\), можно считать, что величина \(\frac{\bar{X} - \mu_0}{\sqrt{\hat{\sigma}^2 / n}}\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\chi^2_5\)
            `,
            "B": String.raw`
                \(t_5\)
            `,
            "C": String.raw`
                \(\chi^2_4\)
            `,
            "D": String.raw`
                \(N(0,1)\)
            `,
            "E": String.raw`
                \(t_4\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дана реализация выборки: 7, -1, 3, 0. Первая порядковая статистика принимает значение`,
    "answers": {
    
            "A": String.raw`
                \(-1\)
            `,
            "B": String.raw`
                \(3\)
            `,
            "C": String.raw`
                \(7\)
            `,
            "D": String.raw`
                \(0\)
            `,
            "E": String.raw`
                \(2.25\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, \ldots, \, X_n)\) — случайная выборка из распределения Бернулли с параметром \(p \in (0;\,1)\). Информация Фишера о параметре \(p\), заключенная в\textasciitilde{}\textsc{одном} наблюдении случайной выборки, равна`,
    "answers": {
    
            "A": String.raw`
                \(p/n\)
            `,
            "B": String.raw`
                \(p\)
            `,
            "C": String.raw`
                \(\frac{1}{p(1-p)}\)
            `,
            "D": String.raw`
                \(n/p\)
            `,
            "E": String.raw`
                \(1/p\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Оценка \(\hat\theta_n\) параметра \(\theta\) называется эффективной в некотором классе оценок \(\mathcal{K}\), если`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{E}(\hat\theta_n)=\theta\)
            `,
            "B": String.raw`
                \(\operatorname{D}(\hat\theta_n)=\frac{\sigma^2}{n}\)
            `,
            "C": String.raw`
                \(\hat\theta_n \xrightarrow{P}\theta\)
            `,
            "D": String.raw`
                \(\operatorname{D}(\hat\theta_n) \to 0\)
            `,
            "E": String.raw`
                \(\forall T\) \(\in \) \(\mathcal{K}\) \(, \forall \) \(\theta\): \(\operatorname{E}((\hat\theta_n-\theta)^2)\leq \operatorname{E}((T-\theta)^2)\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(\hat{\theta}\) — несмещенная оценка для неизвестного параметра \(\theta\), а также выполнены условия регулярности. Неравенство Крамера-Рао представимо в виде`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{D}(\hat{\theta}) \leq I_n(\theta)\)
            `,
            "B": String.raw`
                \(I_n(\theta) \leq \operatorname{D}(\hat{\theta})\)
            `,
            "C": String.raw`
                \(I_n^{-1}(\theta) \leq \operatorname{D}(\hat{\theta})\)
            `,
            "D": String.raw`
                \(\operatorname{D}(\hat{\theta}) \cdot I_n(\theta) > 1\)
            `,
            "E": String.raw`
                \(\operatorname{D}(\hat{\theta}) \cdot I_n(\theta) \leq 1\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке \(X_1,\ldots,X_{4}\), имеющей нормальное распределение с известной дисперсией 1, проверяется гипотеза \(H_0: \mu = 10\) против \(H_a: \mu > 10\). Выборочное среднее оказалось равно 9. Тогда нулевая гипотеза`,
    "answers": {
    
            "A": String.raw`
                Не отвергается на любом разумном уровне значимости
            `,
            "B": String.raw`
                Отвергается на любом разумном уровне значимости
            `,
            "C": String.raw`
                отвергается при \(\alpha = 0.05\), не отвергается при \(\alpha = 0.01\)
            `,
            "D": String.raw`
                отвергается при \(\alpha = 0.1\), не отвергается при \(\alpha = 0.05\)
            `,
            "E": String.raw`
                отвергается при \(\alpha = 0.01\), не отвергается при \(\alpha = 0.05\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке из 100 наблюдений \(X_1,...,X_{n}\), имеющей нормальное распределение с неизвестной дисперсией, был получен 95% доверительный интервал для математического ожидания \([16,24]\). Считая критическое значение t-статистики равным 2, несмещенная оценка дисперсии была равна`,
    "answers": {
    
            "A": String.raw`
                18
            `,
            "B": String.raw`
                3
            `,
            "C": String.raw`
                -1.75
            `,
            "D": String.raw`
                400
            `,
            "E": String.raw`
                1.5
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Вася 25 раз подбросил монетку, 10 раз она выпала «орлом», 15 раз --- «решкой». При проверке гипотезы о том, что монетка — «честная», Вася может получить следующее значение тестовой статистики`,
    "answers": {
    
            "A": String.raw`
                2
            `,
            "B": String.raw`
                10.2
            `,
            "C": String.raw`
                -1
            `,
            "D": String.raw`
                -3.2
            `,
            "E": String.raw`
                0.4
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, \, ..., \, X_n)\) — случайная выборка из равномерного распределения на отрезке \([0; \, \theta]\), где \(\theta > 0\) — неизвестный параметр. Состоятельной является оценка`,
    "answers": {
    
            "A": String.raw`
                \(\bar{X} / 2\)
            `,
            "B": String.raw`
                \(\bar{X}\)
            `,
            "C": String.raw`
                \(X_{1}\)
            `,
            "D": String.raw`
                \(2 \bar{X}\)
            `,
            "E": String.raw`
                \(X_{(1)}\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Оценка метода моментов`,
    "answers": {
    
            "A": String.raw`
                не применима для дискретных случайных величин
            `,
            "B": String.raw`
                эффективнее оценки максимального правдоподобия
            `,
            "C": String.raw`
                не требует знания точного закона распределения
            `,
            "D": String.raw`
                не может быть получена в малой выборке
            `,
            "E": String.raw`
                всегда несмещённая
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Требуется проверить гипотезу о равенстве математических ожиданий по двум нормальным выборкам размером 33 и 16 наблюдений. Истинные дисперсии по обеим выборкам известны, совпадают и равны 196. Разница выборочных средних равна 1. Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(-1/4\)
            `,
            "B": String.raw`
                \(-1/14\)
            `,
            "C": String.raw`
                \(-1/7\)
            `,
            "D": String.raw`
                \(-1/49\)
            `,
            "E": String.raw`
                \(-1/2\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Оценка \(\hat\theta_n\) называется состоятельной оценкой параметра \(\theta\), если`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{D}(\hat\theta_n) \to 0\)
            `,
            "B": String.raw`
                \(\operatorname{E}(\hat\theta_n)=\theta\)
            `,
            "C": String.raw`
                \(\forall\) \(T\) \(\in\) \(\mathcal{K}\) \(, \forall\) \(\theta\): \(\operatorname{E}((\hat\theta_n-\theta)^2)\leq \operatorname{E}((T-\theta)^2)\)
            `,
            "D": String.raw`
                \(\operatorname{D}(\hat\theta_n)=\frac{\sigma^2}{n}\)
            `,
            "E": String.raw`
                \(\hat\theta_n \xrightarrow{P}\theta\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке \(X_1,...,X_{n}\), имеющей нормальное распределение с неизвестным математическим ожиданием, проверяется гипотеза о дисперсии \(H_0: \sigma^2 = 30\) против \(H_a: \sigma^2 \ne 30\). Тестовая статистика будет иметь распределение`,
    "answers": {
    
            "A": String.raw`
                \(\chi^2_{n}\)
            `,
            "B": String.raw`
                \(t_n\)
            `,
            "C": String.raw`
                \(\chi^2_{n-1}\)
            `,
            "D": String.raw`
                \(N(0,1)\)
            `,
            "E": String.raw`
                \(t_{n-1}\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    ]