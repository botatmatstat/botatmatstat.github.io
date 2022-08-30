questions = [{
    "question": String.raw`При проверке гипотезе о равенстве математических ожиданий в двух нормальных выборках размеров \(m\) и \(n\) при известных, но не равных дисперсиях, тестовая статистика имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_{m+n-1}\)
            `,
            "B": String.raw`
                \(t_{m+n-2}\)
            `,
            "C": String.raw`
                \(N(0;1)\)
            `,
            "D": String.raw`
                \(F_{m-1,n-1}\)
            `,
            "E": String.raw`
                \(F_{m}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`В коробке 50 купюр пяти различных номиналов. Случайным образом достаются две купюры. Номиналы вынимаемых купюр`,
    "answers": {
    
            "A": String.raw`
                отрицательно коррелированы
            `,
            "B": String.raw`
                не коррелированы и не зависимы
            `,
            "C": String.raw`
                не коррелированы, но зависимы
            `,
            "D": String.raw`
                положительно коррелированы, но не зависимы
            `,
            "E": String.raw`
                положительно коррелированы
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Требуется проверить гипотезу о равенстве математических ожиданий в двух нормальных выборках размером \(m\) и \(n\). Если дисперсии неизвестны, но равны, то тестовая статистика имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(F_{m-1,n-1}\)
            `,
            "B": String.raw`
                \(F_{m+1,n+1}\)
            `,
            "C": String.raw`
                \(t_{m+n-2}\)
            `,
            "D": String.raw`
                \(t_{m+n-1}\)
            `,
            "E": String.raw`
                \(F_{m,n}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для выборки \(X_1,...,X_n\), имеющей нормальное распределение, проверяется гипотеза \(H_0: \sigma^2=\sigma_0^2\) против \(H_a: \sigma^2 < \sigma_0^2\). Критическая область имеет вид`,
    "answers": {
    
            "A": String.raw`
                \((0,A)\), где \(A\) таково, что \(F_{\chi^2_n-1} (A) =\alpha\)
            `,
            "B": String.raw`
                \((-\infty,A)\), где \(A\) таково, что \(F_{\chi^2_n-1} (A) =\alpha\)
            `,
            "C": String.raw`
                \((0,A)\), где \(A\) таково, что \(F_{\chi^2_n-1} (A) =1-\alpha\)
            `,
            "D": String.raw`
                \((A,+\infty)\), где \(A\) таково, что \(F_{\chi^2_n-1} (A) =1-\alpha\)
            `,
            "E": String.raw`
                
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1,...,X_n\) — выборка из нормального распределения. Статистика \(U=\frac{5-\bar{X}}{5/\sqrt{n}}\) применима для проверки`,
    "answers": {
    
            "A": String.raw`
                гипотезы  \(\,\,H_0: \sigma = 5\)
            `,
            "B": String.raw`
                гипотезы \(\,\,H_0: \mu = 5\) при известной дисперсии, равной 25, при любых
\(n\)
            `,
            "C": String.raw`
                гипотезы  \(\,\,H_0: \mu = 5\) при известной дисперсии, равной 5, при больших
\(n\)
            `,
            "D": String.raw`
                гипотезы  \(\,\,H_0: \mu = 5\) при известной дисперсии, равной 25, только при
больших \(n\)
            `,
            "E": String.raw`
                гипотезы  \(\,\,H_0: \mu = 5\) при известной дисперсии, равной 5, при любых
\(n\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дана реализация выборки: 3, 1, 2. Несмещённая оценка дисперсии равна`,
    "answers": {
    
            "A": String.raw`
                1
            `,
            "B": String.raw`
                1/2
            `,
            "C": String.raw`
                2/3
            `,
            "D": String.raw`
                2
            `,
            "E": String.raw`
                1/3
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайные величины \(X\) и \(Y\) распределены нормально. Для тестирования гипотезы о равенстве дисперсий выбирается \(m\) наблюдений случайной величины \(X\) и \(n\) наблюдений случайной величины \(Y\). Какое распределение может иметь статистика, используемая в данном случае?`,
    "answers": {
    
            "A": String.raw`
                \(F_m,n\)
            `,
            "B": String.raw`
                \(t_m+n-2\)
            `,
            "C": String.raw`
                \(F_m-1,n-1\)
            `,
            "D": String.raw`
                \(t_m+n-1\)
            `,
            "E": String.raw`
                \(F_m+1,n+1\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X_1,...,X_n\) — выборка из нормального распределения с известной дисперсией \(\sigma^2\). Пусть \(U = \frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}}\). Величина \(U^2\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(t_1\)
            `,
            "B": String.raw`
                \(F_1,n-1\)
            `,
            "C": String.raw`
                \(\chi^2_1\)
            `,
            "D": String.raw`
                \(\chi^2_n-1\)
            `,
            "E": String.raw`
                \(t_n-1\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для выборки \(X_1,...,X_n\), имеющей нормальное распределение, проверяется гипотеза \(H_0: \sigma^2=\sigma_0^2\) против \(H_a: \sigma^2 > \sigma_0^2\). Критическая область имеет вид`,
    "answers": {
    
            "A": String.raw`
                \((-\infty,A)\), где \(\,\,A\) таково, что \(\operatorname{P}(\chi^2_n-1 < A) =1-\alpha\)
            `,
            "B": String.raw`
                \((A,+\infty)\), где \(\,\,A\) таково, что \(\operatorname{P}(\chi^2_n-1 < A) =1-\alpha\)
            `,
            "C": String.raw`
                \((A,+\infty)\), где \(\,\,A\) таково, что \(\operatorname{P}(\chi^2_n-1 < A) =\alpha\)
            `,
            "D": String.raw`
                \((0,A)\), где \(\,\,A\) таково, что \(\operatorname{P}(\chi^2_n-1 < A) =\alpha\)
            `,
            "E": String.raw`
                \((0,A)\), где \(\,\,A\) таково, что \(\operatorname{P}(\chi^2_n-1 < A) =1-\alpha\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка и \(I_n(\theta)\) — информация Фишера. Тогда несмещённая оценка \(\hat{\theta}\) называется эффективной, если`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{D}(\hat\theta) \cdot I_n (\theta) = 1\)
            `,
            "B": String.raw`
                \(\operatorname{D}(\hat\theta) \leq I_n (\theta)\)
            `,
            "C": String.raw`
                \(\operatorname{D}(\hat\theta) = I_n (\theta)\)
            `,
            "D": String.raw`
                \(I^-1_n (\theta) \leq \operatorname{D}(\hat\theta)\)
            `,
            "E": String.raw`
                \(I^-1_n (\theta) \geq \operatorname{D}(\hat\theta)\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1\), \(X_2\), ..., \(X_{2016}\) независимы и одинаково распределены, \(N(\mu ; 42)\). Оказалось, что \(\bar X = -23\). Про оценки метода моментов, \(\hat \mu_{MM}\), и метода максимального правдоподобия, \(\hat \mu_{ML}\), можно утверждать, что`,
    "answers": {
    
            "A": String.raw`
                \(\hat \mu_{ML} = -23\), \(\hat\mu_{MM} > -23\)
            `,
            "B": String.raw`
                \(\hat \mu_{ML} = -23\), \(\hat\mu_{MM} = -23\)
            `,
            "C": String.raw`
                \(\hat \mu_{ML} > -23\), \(\hat\mu_{MM} = -23\)
            `,
            "D": String.raw`
                \(\hat \mu_{ML} < -23\), \(\hat\mu_{MM} = -23\)
            `,
            "E": String.raw`
                \(\hat \mu_{ML} = -23\), \(\hat\mu_{MM} < -23\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1,...,X_n\) — выборка из нормально распределенной случайной величины с неизвестным математическим ожиданием и известной дисперсией. На уровне значимости \(\alpha\) проверяется гипотеза \(H_0: \mu = \mu_0\) против \(H_a: \mu \neq \mu_0\). Обозначим \(\varphi_1\) и \(\varphi_2\) вероятности ошибок первого и второго рода соответственно. Между параметрами задачи всегда выполнено соотношение`,
    "answers": {
    
            "A": String.raw`
                \(\varphi_1 = 1 - \alpha\)
            `,
            "B": String.raw`
                \(\varphi_2 = 1 - \alpha\)
            `,
            "C": String.raw`
                \(\varphi_2 = \alpha\)
            `,
            "D": String.raw`
                \(\varphi_1 = \alpha\)
            `,
            "E": String.raw`
                \(\varphi_1 + \varphi_2 = \alpha\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Выберите НЕВЕРНОЕ утверждение про логарифмическую функцию правдоподобия \(\ell(\theta)\)`,
    "answers": {
    
            "A": String.raw`
                Функция \(\ell(\theta)\) может принимать значения больше единицы
            `,
            "B": String.raw`
                Функция \(\ell(\theta)\) может иметь несколько экстремумов
            `,
            "C": String.raw`
                Функция \(\ell(\theta)\) может принимать отрицательные значения
            `,
            "D": String.raw`
                Функция \(\ell(\theta)\) может принимать положительные значения
            `,
            "E": String.raw`
                Функция \(\ell(\theta)\) имеет максимум при \(\theta=0\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Проверяется гипотеза \(H_0\): \(\theta = \gamma\) против альтернативной гипотезы \(H_a\): \(\theta \neq \gamma\), где \(\theta\) и \(\gamma\) --- два неизвестных параметра. Выберите верное утверждение о распределении статистики отношения правдоподобия, \(LR\):`,
    "answers": {
    
            "A": String.raw`
                И при \(H_0\), и при \(H_a\), \(LR \sim \chi_1^2\)
            `,
            "B": String.raw`
                Если верна \(H_0\), то \(LR \sim \chi_1^2\)
            `,
            "C": String.raw`
                Если верна \(H_a\), то \(LR \sim \chi_1^2\)
            `,
            "D": String.raw`
                Если верна \(H_a\), то \(LR \sim \chi_2^2\)
            `,
            "E": String.raw`
                И при \(H_0\), и при \(H_a\), \(LR \sim \chi_2^2\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При проверке гипотезы о равенстве долей используется следующее распределение`,
    "answers": {
    
            "A": String.raw`
                \(N(0;1)\)
            `,
            "B": String.raw`
                \(F_m-1,n-1\)
            `,
            "C": String.raw`
                \(F_m, n\)
            `,
            "D": String.raw`
                \(t_m+n-1\)
            `,
            "E": String.raw`
                \(t_m+n-2\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из биномиального распределения \(Bi(5, p)\). Известно, что \(\operatorname{P}(X = x) =C_n^x p^x(1-p)^{n-x}\). Информация Фишера \(I_n(p)\) равна:`,
    "answers": {
    
            "A": String.raw`
                \(\frac{5p(1-p)}{n}\)
            `,
            "B": String.raw`
                \(\frac{n}{5p(1-p)}\)
            `,
            "C": String.raw`
                \(\frac{n}{p(1-p)}\)
            `,
            "D": String.raw`
                \(\frac{5n}{p(1-p)}\)
            `,
            "E": String.raw`
                \(\frac{p(1-p)}{5n}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Выберите НЕВЕРНОЕ утверждение про метод максимального правдоподобия (ММП):`,
    "answers": {
    
            "A": String.raw`
                ММП применим для зависимых случайных величин
            `,
            "B": String.raw`
                При выполнении технических предпосылок оценки ММП состоятельны
            `,
            "C": String.raw`
                ММП применим для оценивания двух и более параметров
            `,
            "D": String.raw`
                Оценки ММП асимтотически нормальны \(N(0;1)\)
            `,
            "E": String.raw`
                ММП оценки не всегда совпадают с оценками метода моментов
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из экспоненциального распределения с плотностью \[ f(x; \theta) = \begin{cases} \frac{1}{\theta}\exp(-\frac{x}{\theta}) \text{ при } x \geq 0,  \\ 0 \text{ при } x < 0. \end{cases} \] Информация Фишера \(I_n(p)\) равна:`,
    "answers": {
    
            "A": String.raw`
                \(\frac{\theta}{n}\)
            `,
            "B": String.raw`
                \(\frac{n}{\theta^2}\)
            `,
            "C": String.raw`
                \(n \theta^2\)
            `,
            "D": String.raw`
                \(\frac{\theta^2}{n}\)
            `,
            "E": String.raw`
                \(\frac{n}{\theta}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По 100 наблюдениям получена оценка метода максимального правдоподобия, \(\hat\theta = 20\), также известны значения лог-функции правдоподобия \(\ell(20) = -10\) и \(\ell(0)= - 50\). С помощью критерия отношения правдоподобия, \(LR\), проверьте гипотезу \(H_0\): \(\theta = 0\) против \(H_0\): \(\theta \neq 0\) на уровне значимости 5%.`,
    "answers": {
    
            "A": String.raw`
                \(LR = 60\), \(H_0\) не отвергается
            `,
            "B": String.raw`
                \(LR = 40\), \(H_0\) не отвергается
            `,
            "C": String.raw`
                Критерий неприменим
            `,
            "D": String.raw`
                \(LR = 40\), \(H_0\) отвергается
            `,
            "E": String.raw`
                \(LR = 80\), \(H_0\) отвергается
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Для проверки гипотезы о равенстве долей в двух выборках могут использоваться следующие распределения`,
    "answers": {
    
            "A": String.raw`
                \(N(0;1)\) и \(\chi^2_1\)
            `,
            "B": String.raw`
                только \(N(0;1)\)
            `,
            "C": String.raw`
                только \(\chi^2_1\)
            `,
            "D": String.raw`
                \(N(0;1)\) и \(F_m,n\)
            `,
            "E": String.raw`
                только \(F_m,n\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X_1, ... , X_n\) — случайная выборка. Случайные величины \(X_1, ... , X_n\) имеют дискретное распределение, которое задано при помощи таблицы  
    \begin{center} 
    \begin{tabular}{lrrr} 
    \toprule $x$  & -4 & 0 & 3 \\ 
    \midrule $\operatorname{P}(X_i=x)$ & $\frac{3}{4} - \theta$ & $\frac{1}{4}$ & $\theta$\\ \bottomrule \end{tabular} \end{center}  При каком значении константы \(c\) оценка \(\hat{\theta}_n = c (\bar{X} + 3)\) является несмещённой?`,
    "answers": {
    
            "A": String.raw`
                \(4\)
            `,
            "B": String.raw`
                \(\frac{1}{4}\)
            `,
            "C": String.raw`
                \(6\)
            `,
            "D": String.raw`
                \(1\)
            `,
            "E": String.raw`
                \(\frac{1}{7}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Юрий Петров утверждает, что обычно посещает половину занятий по Статистике. За последние полгода из 36 занятий он не посетил ни одного. Вычислите значение критерия хи-квадрат Пирсона для гипотезы, что утверждение Юрия Петрова истинно и укажите число степеней свободы`,
    "answers": {
    
            "A": String.raw`
                \(\chi^2 = 24\), \(df=1\)
            `,
            "B": String.raw`
                \(\chi^2 = 14\), \(df=1\)
            `,
            "C": String.raw`
                \(\chi^2 = 36\), \(df=1\)
            `,
            "D": String.raw`
                \(\chi^2 = 20\), \(df=2\)
            `,
            "E": String.raw`
                \(\chi^2 = 2\), \(df=2\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайные величины \(X_1\), \(X_2\) и \(X_3\) независимы и одинаково распределены,  \begin{center}     \begin{tabular}{lrr} \toprule     $x$ & 3 & 5 \\     \midrule     $\operatorname{P}(X_i = x)$ & $p$ & $1-p$ \\     \bottomrule     \end{tabular} \end{center}  По выборке оказалось, что \(\bar X = 4.5\). Оценка неизвестного \(p\), полученная методом моментов, равна:`,
    "answers": {
    
            "A": String.raw`
                \(1/2\)
            `,
            "B": String.raw`
                \(1/3\)
            `,
            "C": String.raw`
                \(2/3\)
            `,
            "D": String.raw`
                Метод неприменим
            `,
            "E": String.raw`
                \(1/4\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По случайной выборке из 200 наблюдений было оценено выборочное среднее \(\bar{X} = 25\) и несмещённая оценка дисперсии \(\hat{\sigma}^2 = 25\). В рамках проверки гипотезы \(H_0: \mu = 20\) против \(H_a: \mu > 20\) можно сделать вывод, что гипотеза \(H_0\)`,
    "answers": {
    
            "A": String.raw`
                отвергается при \(\alpha = 0.01\), не отвергается при \(\alpha = 0.05\)
            `,
            "B": String.raw`
                отвергается при любом разумном значении \(\alpha\)
            `,
            "C": String.raw`
                не отвергается при любом разумном значении \(\alpha\)
            `,
            "D": String.raw`
                отвергается при \(\alpha = 0.05\), не отвергается при \(\alpha = 0.01\)
            `,
            "E": String.raw`
                Гипотезу невозможно проверить
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Если величина \(\hat\theta\) имеет нормальное распределение \(N(2;0.01^2)\), то, согласно дельта-методу, \(\hat\theta^2\) имеет примерно нормальное распределение`,
    "answers": {
    
            "A": String.raw`
                \(N(2;4\cdot 0.01^2)\)
            `,
            "B": String.raw`
                \(N(4;8\cdot 0.01^2)\)
            `,
            "C": String.raw`
                \(N(4;16\cdot 0.01^2)\)
            `,
            "D": String.raw`
                \(N(4;2\cdot 0.01^2)\)
            `,
            "E": String.raw`
                \(N(4;4\cdot 0.01^2)\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Выборочная доля успехов в некотором испытании составляет \(0.3\). Исследователь Ромео хочет, чтобы длина двустороннего 95%-го доверительного интервала для истинной доли не превышала \(0.1\). Количество наблюдений, необходимых для этого, примерно равно`,
    "answers": {
    
            "A": String.raw`
                \(225\)
            `,
            "B": String.raw`
                \(81\)
            `,
            "C": String.raw`
                \(113\)
            `,
            "D": String.raw`
                \(161\)
            `,
            "E": String.raw`
                \(322\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Доля успехов в первой выборке равна \(0.55\), доля успехов во второй выборке — \(0.4\). Количество наблюдений в выборках равно \(40\) и \(20\) соответственно. Тестовая статистика для проверки гипотезы о равенстве долей может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(1.1\)
            `,
            "B": String.raw`
                \(1.2\)
            `,
            "C": String.raw`
                \(2.4\)
            `,
            "D": String.raw`
                \(0.9\)
            `,
            "E": String.raw`
                \(2.2\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`При подбрасывании игральной кости 600 раз шестерка выпала 105 раз. Гипотеза о том, что кость правильная`,
    "answers": {
    
            "A": String.raw`
                Гипотезу невозможно проверить
            `,
            "B": String.raw`
                отвергается при любом разумном значении \(\alpha\)
            `,
            "C": String.raw`
                отвергается при \(\alpha = 0.01\), не отвергается при \(\alpha = 0.05\)
            `,
            "D": String.raw`
                отвергается при \(\alpha = 0.05\), не отвергается при \(\alpha = 0.01\)
            `,
            "E": String.raw`
                не отвергается при любом разумном значении \(\alpha\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X_1, ... , X_n\) — случайная выборка. Случайные величины \(X_1, ..., X_n\) имеют дискретное распределение, которое задано при помощи таблицы  \begin{center} \begin{tabular}{lrrr} \toprule $x$  & -3 & 0 & 2 \\ \midrule $\operatorname{P}(X_i=x)$ & $\frac{2}{3} - \theta$ & $\frac{1}{3}$ & $\theta$\\ \bottomrule \end{tabular} \end{center}  При каком значении константы \(c\) оценка \(\hat{\theta}_n = c (\bar{X} + 2)\) является несмещённой?`,
    "answers": {
    
            "A": String.raw`
                \(\frac{1}{5}\)
            `,
            "B": String.raw`
                \(3\)
            `,
            "C": String.raw`
                \(5\)
            `,
            "D": String.raw`
                \(\frac{1}{3}\)
            `,
            "E": String.raw`
                \(1\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X_1, ... , X_n\) — случайная выборка и \(\ell(\theta) = \ell(X_1, ..., X_n; \theta)\) — логарифмическая функция правдоподобия. Тогда информация Фишера \(I_n(\theta)\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\E \left( \frac{\partial^2 \ell (\theta)}{\partial \theta^2}\right)\)
            `,
            "B": String.raw`
                \(\E \left( \frac{\partial \ell (\theta)}{\partial \theta}\right)\)
            `,
            "C": String.raw`
                \(-\E \left( \frac{\partial \ell (\theta)}{\partial \theta}\right)\)
            `,
            "D": String.raw`
                \(-\E \left( \frac{\partial^2 \ell (\theta)}{\partial \theta^2}\right)\)
            `,
            "E": String.raw`
                \(-\E \left( \left( \frac{\partial \ell (\theta)}{\partial \theta} \right)^2 \right)\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Кузнец Вакула в течение 100 лет ведет статистику о прилете аистов и рождении младенцев на хуторе близ Диканьки. У него получилась следующая таблица сопряженности  \begin{center} \begin{tabular}{lrr} \toprule & Аисты прилетали  & Аисты не прилетали \\ \midrule Появлялся младенец & 30 & 10 \\ Не появлялся младенец & 30 & 30 \\ \bottomrule \end{tabular} \end{center}  Укажите число степеней свободы статистики Пирсона и на уровне значимости 5% определите, зависит ли появление младенца от прилета аистов`,
    "answers": {
    
            "A": String.raw`
                \(df=2\), зависит
            `,
            "B": String.raw`
                \(df=1\), зависит
            `,
            "C": String.raw`
                \(df=4\), зависит
            `,
            "D": String.raw`
                \(df=3\), зависит
            `,
            "E": String.raw`
                \(df=1\), не зависит
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Есть две нормально распределённых выборки размером \(20\) и \(16\) наблюдений. Истинные дисперсии по обеим выборкам неизвестны и равны. Выборочные средние по обеим выборкам совпадают. Гипотеза о равенстве математических ожиданий`,
    "answers": {
    
            "A": String.raw`
                не отвергается на любом разумном уровне значимости
            `,
            "B": String.raw`
                отвергается на любом разумном уровне значимости
            `,
            "C": String.raw`
                не отвергается на 5%-ом и отвергается на 1%-ом уровне значимости
            `,
            "D": String.raw`
                не отвергается на 1%-ом и отвергается на 5%-ом уровне значимости
            `,
            "E": String.raw`
                Гипотезу невозможно проверить
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Датчик случайных чисел выдал два значения псевдослучайных чисел: \(0.5\) и \(0.9\). Вычислите значение критерия Колмогорова и проверьте гипотезу о соответствии распределения равномерному на уровне значимости \(0.1\). Критическое значение статистики Колмогорова для уровня значимости \(0.1\) и двух наблюдений равно \(0.776\).`,
    "answers": {
    
            "A": String.raw`
                \(0.5\), \(H_0\) не отвергается
            `,
            "B": String.raw`
                \(0.9\), \(H_0\) не отвергается
            `,
            "C": String.raw`
                \(0.9\), \(H_0\) отвергается
            `,
            "D": String.raw`
                \(0.4\), \(H_0\) не отвергается
            `,
            "E": String.raw`
                \(1.4\), \(H_0\) отвергается
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Дана реализация выборки: 3, 1, 2. Выборочный начальный момент первого порядка равен`,
    "answers": {
    
            "A": String.raw`
                3
            `,
            "B": String.raw`
                2
            `,
            "C": String.raw`
                0
            `,
            "D": String.raw`
                14/3
            `,
            "E": String.raw`
                1
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Требуется проверить гипотезу о равенстве математических ожиданий по двум нормальным выборкам размером \(20\) и \(16\) наблюдений. Истинные дисперсии по обеим выборкам известны, совпадают и равны \(16\). Разница выборочных средних равна \(1\). Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(4\)
            `,
            "B": String.raw`
                \(1\)
            `,
            "C": String.raw`
                \(1.224\)
            `,
            "D": String.raw`
                \(1.5\)
            `,
            "E": String.raw`
                \(2\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из распределения с плотностью \[ f(x; \theta) = \begin{cases} \frac{1}{\theta}\exp(-\frac{x}{\theta}) \text{ при } x \geq 0,  \\ 0 \text{ при } x < 0. \end{cases} \] При каком значении константы \(c\) оценка \(\hat{\theta} = c \bar{X}\) является несмещённой?`,
    "answers": {
    
            "A": String.raw`
                \(\frac{n}{n+1}\)
            `,
            "B": String.raw`
                \(\frac{1}{n}\)
            `,
            "C": String.raw`
                \(\frac{n + 1}{n}\)
            `,
            "D": String.raw`
                \(1\)
            `,
            "E": String.raw`
                \(n\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из равномерного на \((0, 2\theta)\) распределения. Оценка \(\hat{\theta} = X_1\)`,
    "answers": {
    
            "A": String.raw`
                Несмещённая
            `,
            "B": String.raw`
                Состоятельная
            `,
            "C": String.raw`
                Эффективная
            `,
            "D": String.raw`
                Асимптотически нормальная
            `,
            "E": String.raw`
                Нелинейная
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из биномиального распределения \(Bi(5, p)\). При каком значении константы \(c\) оценка \(\hat{p} = c \bar{X}\) является несмещённой?`,
    "answers": {
    
            "A": String.raw`
                \(\frac{1}{5}\)
            `,
            "B": String.raw`
                \(5\)
            `,
            "C": String.raw`
                \(\frac{1}{n}\)
            `,
            "D": String.raw`
                \(n\)
            `,
            "E": String.raw`
                \(1\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Требуется проверить гипотезу о равенстве дисперсий по двум нормальным выборкам размером \(20\) и \(16\) наблюдений. Несмещённая оценка дисперсии по первой выборке составила \(60\), по второй — \(90\). Тестовая статистика может быть равна`,
    "answers": {
    
            "A": String.raw`
                \(1\)
            `,
            "B": String.raw`
                \(1.224\)
            `,
            "C": String.raw`
                \(1.5\)
            `,
            "D": String.raw`
                \(2\)
            `,
            "E": String.raw`
                \(4\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Экзамен принимают два преподавателя: Злой и Добрый. Они поставили следующие оценки:  \begin{center} \begin{tabular}{lrrrrr} \toprule Злой   & 2 & 3 & 10 & 8 & 3 \\ Добрый & 6 & 4 & 7  & 8 & \\ \bottomrule \end{tabular} \end{center}  Значение статистики критерия Вилкоксона о совпадении распределений оценок равно`,
    "answers": {
    
            "A": String.raw`
                20
            `,
            "B": String.raw`
                20.5
            `,
            "C": String.raw`
                22.5
            `,
            "D": String.raw`
                7.5
            `,
            "E": String.raw`
                19
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Пусть \(X = (X_1, ... , X_n)\) — случайная выборка из равномерного на \((0, \theta)\) распределения. При каком значении константы \(c\) оценка \(\hat{\theta} = c \bar{X}\) является несмещённой?`,
    "answers": {
    
            "A": String.raw`
                \(2\)
            `,
            "B": String.raw`
                \(1\)
            `,
            "C": String.raw`
                \(\frac{1}{2}\)
            `,
            "D": String.raw`
                \(n\)
            `,
            "E": String.raw`
                \(\frac{1}{n}\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке \(X_1,..., X_n\) из нормального распределения строятся по стандартным формулам доверительные интервалы для математического ожидания. Получен интервал \((a_1,a_2)\) при известной дисперсии и интервал \((b_1,b_2)\) при неизвестной дисперсии. Всегда справедливы следующие соотношения:`,
    "answers": {
    
            "A": String.raw`
                \(a_2 - a_1 < b_2 - b_1\)
            `,
            "B": String.raw`
                \(a_2 - a_1 > b_2 - b_1\)
            `,
            "C": String.raw`
                \(a_1>0,b_1>0,a_2>0,b_2>0\)
            `,
            "D": String.raw`
                \(|a_1-b_1| = |a_2-b_2|\)
            `,
            "E": String.raw`
                \(a_1<0,b_1<0,a_2>0,b_2>0\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Выберите НЕВЕРНОЕ утверждение про эмпирическую функцию распределения \(F_n(x)\)`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{E}(F_n(x))=F(x)\)
            `,
            "B": String.raw`
                \(F_n(x)\) является невозрастающей функцией
            `,
            "C": String.raw`
                \(F_n(x)\) имеет разрыв в каждой точке вариационного ряда
            `,
            "D": String.raw`
                \(F_n(x)\) является состоятельной оценкой функции распределения \(F(x)\)
            `,
            "E": String.raw`
                \(\operatorname{D}(F_n(x))=F(x)(1-F(x))/n\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Производитель фломастеров попросил трёх человек оценить два вида фломастеров: «Лесенка» и «Erich Krause» по 10-балльной шкале:  \begin{center} \begin{tabular}{lrrr} \toprule  & Пафнутий  & Андрей & Карл \\ \midrule Лесенка & 9 & 7 & 6 \\ Erich Krause & 8 & 9 & 7 \\ \bottomrule \end{tabular} \end{center}  Вычислите модуль значения статистики теста знаков. \textbf{Используя нормальную аппроксимацию}, проверьте на уровне значимости 0.1 гипотезу о том, что фломастеры имеют одинаковое качество.`,
    "answers": {
    
            "A": String.raw`
                0.43, \(H_0\) не отвергается
            `,
            "B": String.raw`
                1.96, \(H_0\) отвергается
            `,
            "C": String.raw`
                0.58, \(H_0\) отвергается
            `,
            "D": String.raw`
                0.58, \(H_0\) не отвергается
            `,
            "E": String.raw`
                1.65, \(H_0\) отвергается
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`По выборке из 100 наблюдений построена оценка метода максимального правдоподобия, \(\hat \theta_{ML} = 42\). Вторая производная лог-функции правдоподобия равна \(\ell''(\hat\theta) = -1\). Ширина 95%-го доверительного интервала для неизвестного параметра \(\theta\) примерно равна`,
    "answers": {
    
            "A": String.raw`
                4
            `,
            "B": String.raw`
                1/2
            `,
            "C": String.raw`
                8
            `,
            "D": String.raw`
                2
            `,
            "E": String.raw`
                1
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Случайные величины \(X_1\), \(X_2\) и \(X_3\) независимы и одинаково распределены,  \begin{center}   \begin{tabular}{lrr} \toprule   $X_i$ & 3 & 5 \\   \midrule   $\operatorname{P}(\cdot)$ & $p$ & $1-p$ \\   \bottomrule   \end{tabular} \end{center}  Имеется выборка из трёх наблюдений: \(X_1=5\), \(X_2=3\), \(X_3=5\). Оценка неизвестного \(p\), полученная методом максимального правдоподобия, равна:`,
    "answers": {
    
            "A": String.raw`
                \(1/2\)
            `,
            "B": String.raw`
                Метод неприменим
            `,
            "C": String.raw`
                \(1/4\)
            `,
            "D": String.raw`
                \(2/3\)
            `,
            "E": String.raw`
                \(1/3\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Доля успехов в первой выборке равна \(0.8\), доля успехов во второй выборке — \(0.3\). Количество наблюдений в выборках \(40\) и \(20\) соответственно. Гипотеза о равенстве долей`,
    "answers": {
    
            "A": String.raw`
                не отвергается на 1%-ом и отвергается на 5%-ом уровне значимости
            `,
            "B": String.raw`
                не отвергается на любом разумном уровне значимости
            `,
            "C": String.raw`
                Гипотезу невозможно проверить
            `,
            "D": String.raw`
                не отвергается на 5%-ом и отвергается на 1%-ом уровне значимости
            `,
            "E": String.raw`
                отвергается на любом разумном уровне значимости
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Производитель фломастеров попросил трёх человек оценить качество двух вида фломастеров: «Лесенка» и «Erich Krause» по 10-балльной шкале:  \begin{center} \begin{tabular}{lrrr} \toprule  & Пафнутий & Андрей & Карл \\ \midrule Лесенка & 9 & 7 & 6 \\ Erich Krause & 8 & 9 & 7 \\ \bottomrule \end{tabular} \end{center}  При альтернативной гипотезе о том, что Erich Krause качественнее, \textbf{точное} \(P\)-значение (\(P\)-value) статистики теста знаков равно`,
    "answers": {
    
            "A": String.raw`
                1/8
            `,
            "B": String.raw`
                3/8
            `,
            "C": String.raw`
                1/2
            `,
            "D": String.raw`
                1/3
            `,
            "E": String.raw`
                2/3
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Величины \(X_1\), ..., \(X_n\) независимы и одинаково распределены, \(\operatorname{E}(X_1^2)=2\theta + 4\). По выборке из 100 наблюдений оказалось, что \(\sum_{i=1}^{100} X_i^2 = 200\). Оценка метода момента, \(\hat\theta_{MM}\), равна`,
    "answers": {
    
            "A": String.raw`
                0
            `,
            "B": String.raw`
                2
            `,
            "C": String.raw`
                Метод неприменим
            `,
            "D": String.raw`
                -1
            `,
            "E": String.raw`
                1
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`Последовательность оценок \(\hat{\theta}_1, \hat{\theta}_2, ...\) называется состоятельной, если`,
    "answers": {
    
            "A": String.raw`
                \(\operatorname{D}(\hat\theta_n) \to 0\)
            `,
            "B": String.raw`
                \(\operatorname{D}(\hat\theta_n) \geq \operatorname{D}(\hat\theta_n + 1)\)
            `,
            "C": String.raw`
                \(\operatorname{P}(|\hat\theta_n - \theta | > t) \to 0\) для всех \(t > 0\)
            `,
            "D": String.raw`
                \(\operatorname{E}(\hat\theta_n) \to \theta\)
            `,
            "E": String.raw`
                \(\operatorname{E}(\hat\theta_n) = \theta\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    ]