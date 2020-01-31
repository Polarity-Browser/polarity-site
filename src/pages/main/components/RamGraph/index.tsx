import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

interface RamGraphProps {}

export const RamGraph: React.FC<RamGraphProps> = props => {
    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(22, 23, 24, 0.1)',
                        lineWidth: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Tab Count'
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(22, 23, 24, 0.1)',
                        lineWidth: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Megabytes'
                    }
                }
            ]
        },
        elements: {
            line: {
                tension: 0.4,
                cubicInterpolationMode: 'monotone'
            }
        },
        legend: {
            display: true
        },
        point: {
            backgroundColor: 'white'
        },
        tooltips: {
            titleFontFamily: 'Muli',
            backgroundColor: 'rgba(0,0,0,0.3)',
            titleFontColor: 'white',
            caretSize: 5,
            cornerRadius: 2,
            xPadding: 10,
            yPadding: 10
        }
    };

    const chartData = (canvas: any) => {
        return {
            labels: ['1 Tab', '5 Tabs', '15 Tabs', '30 Tabs'],
            datasets: [
                {
                    label: 'Polarity',
                    backgroundColor: buildChartTheme(canvas, 400, 'rgba(62, 187, 236, 1)'),
                    borderColor: 'rgba(62, 187, 236, 1)',
                    borderWidth: 3,
                    data: [5.5, 20, 30, 40]
                },
                {
                    label: 'Google Chrome',
                    backgroundColor: buildChartTheme(canvas, 400, 'rgba(26, 162, 96, 1)'),
                    borderColor: 'rgba(26, 162, 96, 1)',
                    borderWidth: 3,
                    data: [5.5, 20, 30, 40]
                },
                {
                    label: 'Firefox',
                    backgroundColor: buildChartTheme(canvas, 400, 'rgba(253, 107, 84, 1)'),
                    borderColor: 'rgba(253, 107, 84, 1)',
                    borderWidth: 3,
                    data: [5.5, 20, 30, 40]
                },
                {
                    label: 'Internet Explorer',
                    backgroundColor: buildChartTheme(canvas, 400, 'rgba(52, 234, 255, 1)'),
                    borderColor: 'rgba(52, 234, 255, 1)',
                    borderWidth: 3,
                    data: [72, 180, 300, 646]
                },
                {
                    label: 'Edge',
                    backgroundColor: buildChartTheme(canvas, 400, 'rgba(12, 95, 185, 1)'),
                    borderColor: 'rgba(12, 95, 185, 1)',
                    borderWidth: 3,
                    data: [5.5, 20, 30, 40]
                }
            ]
        };
    };

    
    const buildChartTheme = (canvas: any, height: number, color: string) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, height); // Height 500px
        gradient.addColorStop(0, setRgbaOpacity(color, '0.15'));
        gradient.addColorStop(0.75, setRgbaOpacity(color, '0'));

        return gradient;
    }

    const setRgbaOpacity = (rgba: string, opacity: string) => {
        return rgba.replace(/[^,]+(?=\))/, opacity);
    }

    return (
        <>
            <Line height={500} width={800} data={chartData} options={defaultChartOptions} />
        </>
    );
};
