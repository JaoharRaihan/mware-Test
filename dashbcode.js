import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl, Switch, Animated, Modal, Button } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
  const [showAlert, setShowAlert] = useState(false); // Modal state
  const [recentTransactions, setRecentTransactions] = useState([
    { date: '01/16/2025', description: 'Grocery', amount: '-$50' },
    { date: '01/15/2025', description: 'Salary', amount: '+$2000' },
    { date: '01/14/2025', description: 'Dining', amount: '-$75' },
  ]);

  // Chart Data
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [500, 700, 300, 800, 400, 600] }],
  };

  const weekChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{ data: [70, 90, 60, 100, 80, 95, 110] }],
  };

  const dayChartData = {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [{ data: [10, 15, 25, 40, 30, 50] }],
  };

  const yearChartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{ data: [4500, 5200, 4800, 6000, 7000] }],
  };

  const pieChartData = [
    { name: 'Income', population: 75, color: '#4CAF50', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Expense', population: 25, color: '#F44336', legendFontColor: '#333', legendFontSize: 12 },
  ];

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#f7f9fc',
    backgroundGradientTo: '#f7f9fc',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 128, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 15 },
    propsForDots: { r: '5', strokeWidth: '3', stroke: '#008080' },
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000); // Simulate network request
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const togglePeriod = (period) => {
    setSelectedPeriod(period);
  };

  const openAlert = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, isDarkMode ? styles.darkContainer : null]}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <BalanceSection />
      <PeriodSelector togglePeriod={togglePeriod} selectedPeriod={selectedPeriod} />
      <AnalyticsSection
        selectedPeriod={selectedPeriod}
        barData={barChartData}
        weekData={weekChartData}
        dayData={dayChartData}
        yearData={yearChartData}
        pieData={pieChartData}
        config={chartConfig}
        isDarkMode={isDarkMode}
      />
      <Notifications openAlert={openAlert} />
      <TransactionFeed recentTransactions={recentTransactions} />
      <FinancialGoalTracker />
      <AlertModal showAlert={showAlert} closeAlert={closeAlert} />
    </ScrollView>
  );
};

// Header with dark mode toggle
const Header = ({ isDarkMode, toggleDarkMode }) => (
  <View style={[styles.header, isDarkMode ? styles.darkHeader : null]}>
    <Text style={[styles.headerTitle, isDarkMode ? styles.darkText : null]}>Financial Dashboard</Text>
    <Ionicons name="person-circle-outline" size={30} color={isDarkMode ? '#fff' : '#008080'} />
    <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
  </View>
);

// Balance overview section
const BalanceSection = () => (
  <View style={styles.balanceContainer}>
    <Text style={styles.sectionTitle}>Balance Overview</Text>
    <View style={styles.row}>
      <BalanceBox icon="wallet-outline" color="#008080" label="Total Balance" amount="$7,250" trend="+5%" />
      <BalanceBox icon="trending-up-outline" color="#4CAF50" label="Savings" amount="$3,500" trend="+10%" />
      <BalanceBox icon="cash-outline" color="#F44336" label="Expenses" amount="$1,750" trend="-3%" />
    </View>
  </View>
);

// Transaction Feed
const TransactionFeed = ({ recentTransactions }) => (
  <View style={styles.transactionFeedContainer}>
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    {recentTransactions.map((transaction, index) => (
      <View key={index} style={styles.transactionItem}>
        <Text style={styles.transactionText}>{transaction.date} - {transaction.description}</Text>
        <Text style={styles.transactionAmount}>{transaction.amount}</Text>
      </View>
    ))}
  </View>
);

// Financial Goal Tracker
const FinancialGoalTracker = () => (
  <View style={styles.goalTrackerContainer}>
    <Text style={styles.sectionTitle}>Savings Goal</Text>
    <View style={styles.goalProgress}>
      <Text style={styles.goalAmount}>$3,500 / $5,000</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '70%' }]} />
      </View>
      <Text style={styles.goalPercentage}>70% Achieved</Text>
    </View>
  </View>
);

// Alert Modal
const AlertModal = ({ showAlert, closeAlert }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={showAlert}
    onRequestClose={closeAlert}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Important Alert!</Text>
        <Text style={styles.modalMessage}>You have reached 70% of your savings goal for this month!</Text>
        <Button title="Close" onPress={closeAlert} />
      </View>
    </View>
  </Modal>
);

// Notifications
const Notifications = ({ openAlert }) => (
  <View style={styles.notificationContainer}>
    <Text style={styles.notificationTitle}>Important Alerts</Text>
    <TouchableOpacity onPress={openAlert} style={styles.notificationCard}>
      <Ionicons name="notifications" size={24} color="#fff" />
      <Text style={styles.notificationText}>Your savings goal is at 70%. Keep it up!</Text>
    </TouchableOpacity>
  </View>
);

// Period Selector (Monthly, Weekly, Yearly)
const PeriodSelector = ({ togglePeriod, selectedPeriod }) => (
  <View style={styles.periodSelector}>
    <TouchableOpacity onPress={() => togglePeriod('Monthly')} style={[styles.periodButton, selectedPeriod === 'Monthly' && styles.selectedPeriod]}>
      <Text style={styles.periodButtonText}>Monthly</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => togglePeriod('Weekly')} style={[styles.periodButton, selectedPeriod === 'Weekly' && styles.selectedPeriod]}>
      <Text style={styles.periodButtonText}>Weekly</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => togglePeriod('Yearly')} style={[styles.periodButton, selectedPeriod === 'Yearly' && styles.selectedPeriod]}>
      <Text style={styles.periodButtonText}>Yearly</Text>
    </TouchableOpacity>
  </View>
);

// Analytics Section with charts
const AnalyticsSection = ({ selectedPeriod, barData, weekData, dayData, yearData, pieData, config, isDarkMode }) => (
  <View style={styles.analyticsContainer}>
    <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : null]}>Analytics Overview</Text>
    <ChartCard title="Performance">
      {selectedPeriod === 'Monthly' && <BarChart data={barData} width={screenWidth - 40} height={220} chartConfig={config} style={styles.chart} />}
      {selectedPeriod === 'Weekly' && <LineChart data={weekData} width={screenWidth - 40} height={220} chartConfig={config} style={styles.chart} />}
      {selectedPeriod === 'Yearly' && <BarChart data={yearData} width={screenWidth - 40} height={220} chartConfig={config} style={styles.chart} />}
    </ChartCard>
    <ChartCard title="Income vs Expense">
      <PieChart data={pieData} width={screenWidth - 40} height={220} chartConfig={config} accessor="population" backgroundColor="transparent" paddingLeft="15" />
    </ChartCard>
  </View>
);

// ChartCard Component
const ChartCard = ({ title, children }) => (
  <View style={styles.chartCard}>
    <Text style={styles.chartLabel}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  darkContainer: {
    backgroundColor: '#2C2C2C',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  darkHeader: {
    backgroundColor: '#444',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  balanceContainer: {
    backgroundColor: '#DFF5F2',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceBox: {
    flex: 1,
    backgroundColor: '#EAF7F6',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  boxLabel: {
    fontSize: 14,
    color: '#004D4D',
    marginVertical: 5,
  },
  boxAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#008080',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  positiveTrend: {
    color: '#4CAF50',
  },
  negativeTrend: {
    color: '#F44336',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  chartCard: {
    marginBottom: 25,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  chart: {
    marginTop: 15,
    borderRadius: 10,
  },
  chartLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  periodButton: {
    padding: 10,
    backgroundColor: '#008080',
    borderRadius: 10,
  },
  selectedPeriod: {
    backgroundColor: '#4CAF50',
  },
  periodButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  notificationContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F44336',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  notificationText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
  transactionFeedContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  transactionItem: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    fontSize: 14,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#F44336',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  goalTrackerContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  goalProgress: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalAmount: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 5,
  },
  progressFill: {
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  goalPercentage: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4CAF50',
  },
});

export default HomeScreen;
